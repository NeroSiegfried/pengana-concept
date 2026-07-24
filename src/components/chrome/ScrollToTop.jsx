import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );
        target?.scrollIntoView({ block: "start" });
      });
    } else {
      window.scrollTo(0, 0);
    }

    if (previousPath.current !== pathname && !hash) {
      window.requestAnimationFrame(() => {
        document.querySelector("main")?.focus({ preventScroll: true });
      });
    }

    previousPath.current = pathname;
  }, [hash, pathname]);

  return null;
}
