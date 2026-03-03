# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Performance Optimization in Scroll Events
**Learning:** Attaching `getBoundingClientRect` synchronously inside a `scroll` event listener can cause layout thrashing and significant main-thread jank. The browser's layout engine struggles to recalculate styles concurrently with parsing frequent scroll events.
**Action:** Always throttle scroll-bound DOM measurements (like `getBoundingClientRect`) using `requestAnimationFrame`, and use `{ passive: true }` when attaching the listener so the browser knows `preventDefault()` won't be called, resulting in smoother scrolling.
