// Pengana Concept logomark — three overlapping peaks forming one massif, capped
// by a diamond summit. Built on a strict geometric grid (shared baseline, a
// dominant central peak flanked by two overlapping foothills). Single colour via
// currentColor so it adapts to every header/footer/overlay context.
export default function Logomark({ className = "" }) {
  return (
    <svg
      className={`logomark ${className}`.trim()}
      viewBox="10 -1 100 83"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="12,80 36,46 60,80" />
      <polygon points="60,80 84,46 108,80" />
      <polygon points="26,80 60,22 94,80" />
      <polygon points="60,1 65.3,10 60,19 54.7,10" />
    </svg>
  );
}
