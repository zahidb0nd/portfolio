# Bolt's Journal ⚡

## 2026-03-04 - Scroll Event Listener Throttling
**Learning:** Frequent DOM calculations like `getBoundingClientRect` within un-throttled scroll event listeners can cause significant layout thrashing and main thread blocking, particularly in components that track active sections.
**Action:** When adding scroll event listeners that interact with DOM properties, wrap the execution in `requestAnimationFrame` using a `ticking` variable. Furthermore, always mark the event listener as `{ passive: true }` if `preventDefault` is not called to enhance scrolling responsiveness.

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.
