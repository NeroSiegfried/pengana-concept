import { IMG } from "../../content/imageManifest.js";

// Responsive, progressively-loaded image.
//
// Looks the stable "/images/…" path up in the generated manifest and renders a
// <picture> that serves WebP (with a progressive-JPEG fallback) at the right
// width for the viewport, capped at ~2x display size. A tiny inlined LQIP is
// painted as the element's background so something sharp-ish appears instantly
// on slow connections, then the full image loads on top.
//
// Pass `eager` for above-the-fold images (heroes) to opt out of lazy-loading,
// and `duotone` on the statement bands to use the brand duotone variant when
// one exists (falls back to full colour automatically if it doesn't).
export default function SmartImage({
  src,
  alt = "",
  className = "",
  sizes = "100vw",
  eager = false,
  duotone = false,
  style,
  ...rest
}) {
  const entry = IMG[src];

  // Any path not in the manifest still renders — just without the variants.
  if (!entry) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...rest}
      />
    );
  }

  const set = duotone && entry.duotone ? entry.duotone : entry;

  return (
    <picture className="smart-picture">
      <source type="image/webp" srcSet={set.webp} sizes={sizes} />
      <img
        className={`smart-img ${className}`.trim()}
        src={set.fallback}
        srcSet={set.jpg}
        sizes={sizes}
        alt={alt}
        width={entry.w}
        height={entry.h}
        loading={eager ? "eager" : "lazy"}
        fetchpriority={eager ? "high" : undefined}
        decoding="async"
        onLoad={(event) => event.currentTarget.classList.add("is-loaded")}
        style={{ backgroundImage: `url("${set.lqip}")`, ...style }}
        {...rest}
      />
    </picture>
  );
}
