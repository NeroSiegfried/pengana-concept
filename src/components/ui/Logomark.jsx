// Pengana Concept logomark — a faithful, regularised rebuild of the original:
// a small triangle in front of two overlapping mountain ridges that recede to
// the right, with a diamond nestled in the summit notch. Every edge is a clean
// 45°, the ridge gaps are exactly parallel, and all corners are uniformly
// rounded via a round-joined stroke of the same colour. Single colour via
// currentColor so it adapts to every header/footer/overlay context.
export default function Logomark({ className = "" }) {
  return (
    <svg
      className={`logomark ${className}`.trim()}
      viewBox="3 -4 240 128"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="46,80 82,118 10,118" />
      <polygon points="78,36 160,118 100,118 48,66" />
      <polygon points="158,40 236,118 176,118 128,70" />
      <polygon points="117,3 141,27 117,51 93,27" />
    </svg>
  );
}
