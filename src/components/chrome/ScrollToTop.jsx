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
      // Instant, not smooth: html has global scroll-behavior:smooth for
      // in-page anchor links, but that would make a page-change reset glide
      // from the old scroll position instead of snapping — and during that
      // glide, Reveal's IntersectionObserver sees lower-page elements pass
      // through the viewport and fires their entrance animation early. An
      // instant jump lands the new page at top before Reveal ever observes
      // it, so entrance animations always start from the intended state.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
