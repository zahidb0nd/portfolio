# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Throttling Scroll Event in React
**Learning:** Raw scroll event listeners can trigger rapid recalculations (e.g., `getBoundingClientRect`), leading to janky scrolling and high CPU usage. Wrapping the handler logic in `requestAnimationFrame` ensures the DOM changes and state updates synchronize with the browser's refresh rate.
**Action:** Use `requestAnimationFrame` and a tracking variable (like `ticking`) to throttle high-frequency events such as scroll or resize before triggering state updates or layout recalcs.
