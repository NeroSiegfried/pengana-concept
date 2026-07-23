import { useEffect } from "react";
import { GROUP } from "../../content/company.js";

export default function PageFrame({
  site = "concept",
  title,
  children,
  className = "",
}) {
  useEffect(() => {
    document.title =
      title === GROUP.name ? title : `${title} — ${GROUP.name}`;
  }, [title]);

  return (
    <main
      className={`page ${className}`.trim()}
      data-site={site}
      tabIndex="-1"
    >
      {children}
    </main>
  );
}
