// Pengana Concept logomark — a precise, regularised rebuild of the original
// mark's own geometry: a small triangle in front of two overlapping ridges
// (translated copies of one another) receding to the right, with a diamond
// nestled in the summit notch. Built by decoding the original file's exact
// path coordinates rather than by eye:
//   - every long edge is exactly 45°;
//   - the three gaps (triangle-to-ridge, ridge-to-ridge, ridge-to-diamond)
//     are the same width, by construction (blue is green translated, and the
//     diamond and triangle are positioned as exact parallel offsets of that
//     same translation);
//   - only 5 of the 14 corners are rounded, matching the original exactly:
//     the small triangle's apex, each ridge's lower-left corner, and the
//     diamond's top and bottom points. Every other corner — both base corners
//     of the triangle, each ridge's apex/shoulder/lower-right, and the
//     diamond's left/right points — stays sharp.
// Single colour via currentColor so it adapts to every header/footer/overlay
// context.
export default function Logomark({ className = "" }) {
  return (
    <svg
      className={`logomark ${className}`.trim()}
      viewBox="-6 -12 284 140"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M31.64 90.36 Q38 84 44.36 90.36 L72 118 L4 118 Z" />
      <path d="M86 34 L52 68 L95.64 111.64 Q102 118 111 118 L170 118 Z" />
      <path d="M184 34 L150 68 L193.64 111.64 Q200 118 209 118 L268 118 Z" />
      <path d="M129.34 4.66 Q135 -1 140.66 4.66 L162 26 L140.66 47.34 Q135 53 129.34 47.34 L108 26 Z" />
    </svg>
  );
}
