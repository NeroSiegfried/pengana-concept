import { Link } from "react-router-dom";

export default function ActionLink({
  to,
  children,
  variant = "solid",
  external = false,
  className = "",
}) {
  const classes = `action action--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {external ? (
        <span className="visually-hidden"> (opens in a new tab)</span>
      ) : null}
      <span className="action__arrow" aria-hidden="true">
        ↗
      </span>
    </>
  );

  if (external) {
    return (
      <a
        className={classes}
        href={to}
        target="_blank"
        rel="noreferrer"
      >
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
