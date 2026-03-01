# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-23 - Throttling Scroll Listeners
**Learning:** Attaching expensive DOM reads like `getBoundingClientRect()` directly to un-throttled scroll events causes layout thrashing and main thread jank.
**Action:** When handling `scroll` events that need DOM measurements, always wrap the logic in a `requestAnimationFrame` block with a `ticking` flag to cap updates to the browser's refresh rate. Add `{ passive: true }` to the event listener if it doesn't call `preventDefault()`.
