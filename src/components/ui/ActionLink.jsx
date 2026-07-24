import { Link } from "react-router-dom";
import { Arrow } from "./icons.jsx";

// Inner markup shared by ActionLink and by <button> actions (e.g. the contact
// form) so every action button animates identically. Pill variants keep one
// circular arrow that, on hover, glides from the left edge to the right edge and
// stays there while the label slides across to clear its path and the text is
// replaced by an identical copy. The line variant is an in-copy underlined link
// with the same diagonal arrow on the right.
export function ActionContent({ children, variant = "solid", external = false }) {
  const newTab = external ? (
    <span className="visually-hidden"> (opens in a new tab)</span>
  ) : null;

  if (variant === "line") {
    return (
      <>
        <span className="action__label-line">{children}</span>
        {newTab}
        <Arrow className="action__arrow-line" />
      </>
    );
  }

  return (
    <>
      <span className="action__label">
        <span className="action__label-text">{children}</span>
        <span className="action__label-text action__label-text--next" aria-hidden="true">
          {children}
        </span>
      </span>
      <span className="action__icon" aria-hidden="true">
        <Arrow className="action__arrow-icon" />
      </span>
      {newTab}
    </>
  );
}

export default function ActionLink({
  to,
  children,
  variant = "solid",
  external = false,
  className = "",
}) {
  const classes = `action action--${variant} ${className}`.trim();
  const content = (
    <ActionContent variant={variant} external={external}>
      {children}
    </ActionContent>
  );

  if (external) {
    return (
      <a className={classes} href={to} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {content}
    </Link>
  );
}
