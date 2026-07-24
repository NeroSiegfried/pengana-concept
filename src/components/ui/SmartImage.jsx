import { IMG } from "../../content/imageManifest.js";

// Renders a responsive <picture> from a resolved manifest entry. A tiny inlined
// LQIP is painted as the element's background so something sharp-ish appears
// instantly on slow connections, then the full image loads on top.
function Picture({ entry, set, className = "", sizes, eager, alt = "", style, ...rest }) {
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

// Responsive, progressively-loaded image keyed by its stable "/images/…" path.
// Pass `eager` for above-the-fold images (heroes).
export default function SmartImage({
  src,
  alt = "",
  className = "",
  sizes = "100vw",
  eager = false,
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

  return (
    <Picture set={entry} entry={entry} alt={alt} className={className} sizes={sizes} eager={eager} style={style} {...rest} />
  );
}
