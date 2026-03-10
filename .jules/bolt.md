# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Layout Thrashing in Scroll Events
**Learning:** Performing unthrottled DOM reads (`getBoundingClientRect`) inside a `scroll` event listener causes severe layout thrashing (synchronous reflows), degrading scrolling performance and causing jank, particularly on mobile devices.
**Action:** Always throttle DOM reads inside scroll, resize, or mousemove events using `requestAnimationFrame`, ensure the event listener is marked as `{ passive: true }`, and correctly clean up the `animationFrameId` on unmount to prevent memory leaks.
