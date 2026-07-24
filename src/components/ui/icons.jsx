// Shared inline icons. One diagonal arrow and one chevron drive every arrow and
// caret on the site so their look and motion stay consistent. Motion (rotation,
// travel) is applied in CSS by the parent, not baked into the markup here.

// Diagonal arrow that points to the upper-right at rest. Parents rotate it 45deg
// on hover so it swivels to point straight right.
export function Arrow({ className = "" }) {
  return (
    <svg
      className={`icon icon--arrow ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 7H17v8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chevron pointing down at rest; parents rotate it 180deg when a panel is open.
export function Caret({ className = "" }) {
  return (
    <svg
      className={`icon icon--caret ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 9.5 12 15.5 18 9.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
