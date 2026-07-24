// Image build pipeline.
//
// Reads master photography from  source-images/images/**   (never modified)
// and writes right-sized, compressed, progressively-loadable variants into
//   public/images/**   plus a manifest at  src/content/imageManifest.js .
//
// For every slot it emits, per responsive width:
//   <name>-<w>.webp   (next-gen, primary)
//   <name>-<w>.jpg    (progressive JPEG fallback via <picture>)
// an inlined ~24px LQIP (base64, shows instantly under the sharp image), and
// for the four full-bleed statement bands, a brand duotone set on top.
//
// Widths are capped so a served image is at most ~2x its display size, and
// never upscaled past the master. Re-run any time a master changes:
//   npm run images
//
// Masters stay in source-images/ untouched — this script only ever writes to
// public/images/ and the manifest.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const SRC_ROOT = path.join(ROOT, "source-images/images");
const OUT_ROOT = path.join(ROOT, "public/images");
const MANIFEST = path.join(ROOT, "src/content/imageManifest.js");

// Display-size-aware width ladders (px). Capped at 2x the largest place the
// image is shown, then further capped at the master's own width.
const ROLES = {
  hero: [640, 1024, 1440, 2000], // full-bleed hero / showcase
  statement: [640, 1024, 1440, 2000], // full-bleed statement band
  feature: [420, 768, 1100, 1520], // split-story / portfolio / portrait
  portraitSm: [300, 600], // board monograms
};

// Slot -> role. Anything unlisted falls back to "feature".
function roleFor(rel) {
  if (/\/board\//.test(rel)) return "portraitSm";
  const base = path.basename(rel);
  if (base === "hero.jpg") return "hero";
  if (base === "statement.jpg") return "statement";
  return "feature";
}

// Brand duotones for the statement bands (shadow -> highlight). Reversible:
// full-colour variants are still generated, so a one-line prop flip reverts.
const hex = (h) => ({
  r: parseInt(h.slice(1, 3), 16),
  g: parseInt(h.slice(3, 5), 16),
  b: parseInt(h.slice(5, 7), 16),
});
// Duotones were removed by request — plain colour images are used everywhere.
// Restore entries here (see git history) to regenerate brand duotone variants.
const DUOTONE = {};

const WEBP = { quality: 74, effort: 5 };
const JPG = { quality: 78, mozjpeg: true, progressive: true };

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

// Build a 256-entry shadow->highlight lookup, then map a grayscale buffer
// through it to a true two-colour duotone.
function duotoneLut({ shadow, highlight }) {
  const lut = new Uint8Array(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = i / 255;
    lut[i * 3] = Math.round(shadow.r + (highlight.r - shadow.r) * t);
    lut[i * 3 + 1] = Math.round(shadow.g + (highlight.g - shadow.g) * t);
    lut[i * 3 + 2] = Math.round(shadow.b + (highlight.b - shadow.b) * t);
  }
  return lut;
}

async function duotonePipeline(input, width, duo) {
  const { data, info } = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .toColourspace("b-w")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const lut = duotoneLut(duo);
  const rgb = Buffer.allocUnsafe(info.width * info.height * 3);
  for (let i = 0; i < data.length; i++) {
    const g = data[i] * 3;
    const p = i * 3;
    rgb[p] = lut[g];
    rgb[p + 1] = lut[g + 1];
    rgb[p + 2] = lut[g + 2];
  }
  return sharp(rgb, {
    raw: { width: info.width, height: info.height, channels: 3 },
  });
}

async function lqip(pipelineFactory) {
  const buf = await pipelineFactory()
    .resize({ width: 24 })
    .webp({ quality: 40 })
    .toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

function srcset(dir, name, suffix, widths, ext) {
  return widths
    .map((w) => `/images/${dir}/${name}${suffix}-${w}.${ext} ${w}w`)
    .join(", ");
}
function pickFallback(widths) {
  // Middle-ish width for the <img src> fallback.
  const target = 1024;
  return widths.reduce((a, b) =>
    Math.abs(b - target) < Math.abs(a - target) ? b : a,
  );
}

async function run() {
  const files = (await walk(SRC_ROOT)).sort();
  const manifest = {};
  let variantCount = 0;

  for (const file of files) {
    const rel = path.relative(SRC_ROOT, file).split(path.sep).join("/"); // group/hero.jpg
    const dir = path.dirname(rel);
    const name = path.basename(rel, path.extname(rel));
    const meta = await sharp(file).metadata();
    const srcW = meta.width || 2000;
    const srcH = meta.height || 1125;

    const ladder = ROLES[roleFor(rel)];
    let widths = ladder.filter((w) => w < srcW);
    widths.push(Math.min(srcW, ladder[ladder.length - 1]));
    widths = [...new Set(widths)].sort((a, b) => a - b);

    const outDir = path.join(OUT_ROOT, dir);
    await fs.mkdir(outDir, { recursive: true });

    // Full-colour responsive variants.
    for (const w of widths) {
      const base = sharp(file).resize({ width: w, withoutEnlargement: true });
      await base.clone().webp(WEBP).toFile(path.join(outDir, `${name}-${w}.webp`));
      await base.clone().jpeg(JPG).toFile(path.join(outDir, `${name}-${w}.jpg`));
      variantCount += 2;
    }

    const entry = {
      w: srcW,
      h: srcH,
      lqip: await lqip(() => sharp(file)),
      webp: srcset(dir, name, "", widths, "webp"),
      jpg: srcset(dir, name, "", widths, "jpg"),
      fallback: `/images/${dir}/${name}-${pickFallback(widths)}.jpg`,
    };

    // Duotone overlay set for statement bands.
    const duo = DUOTONE[rel];
    if (duo) {
      for (const w of widths) {
        const pipe = await duotonePipeline(file, w, duo);
        await pipe.clone().webp(WEBP).toFile(path.join(outDir, `${name}-duotone-${w}.webp`));
        await pipe.clone().jpeg(JPG).toFile(path.join(outDir, `${name}-duotone-${w}.jpg`));
        variantCount += 2;
      }
      entry.duotone = {
        lqip: await lqip(() => sharp(file).toColourspace("b-w")),
        webp: srcset(dir, name, "-duotone", widths, "webp"),
        jpg: srcset(dir, name, "-duotone", widths, "jpg"),
        fallback: `/images/${dir}/${name}-duotone-${pickFallback(widths)}.jpg`,
      };
    }

    manifest[`/images/${rel}`] = entry;
    process.stdout.write(
      `  ${rel}  ${srcW}x${srcH} -> [${widths.join(", ")}]${duo ? " +duotone" : ""}\n`,
    );
  }

  const header =
    "// AUTO-GENERATED by scripts/gen-images.mjs — do not edit by hand.\n" +
    "// Keyed by the original /images/<group>/<name>.jpg path. Regenerate with:\n" +
    "//   npm run images\n\n" +
    "export const IMG = ";
  await fs.writeFile(MANIFEST, header + JSON.stringify(manifest, null, 2) + ";\n");

  console.log(
    `\nDone. ${files.length} slots, ${variantCount} variants -> public/images/`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
