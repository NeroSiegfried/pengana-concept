import { useSyncExternalStore } from "react";

// TEMPORARY decision aid. Flips every 5 seconds so the statement bands alternate
// between their brand duotone and full-colour variants, making it easy to pick
// the final treatment. A single shared timer drives every band in sync.
//
// To make the choice permanent, delete this file and the PreviewToggleImage
// branch in SmartImage.jsx:
//   • keep duotone  → nothing else needed (ImageStatement already passes it)
//   • keep colour   → remove the `duotone` prop on ImageStatement's <SmartImage>
const INTERVAL_MS = 5000;
let showDuotone = true;
const listeners = new Set();

if (typeof window !== "undefined") {
  window.setInterval(() => {
    showDuotone = !showDuotone;
    for (const notify of listeners) notify();
  }, INTERVAL_MS);
}

function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function useDuotonePreview() {
  return useSyncExternalStore(
    subscribe,
    () => showDuotone,
    () => true,
  );
}
