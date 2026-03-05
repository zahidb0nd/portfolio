# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Scroll Event Throttling and Memory Leaks
**Learning:** When using `requestAnimationFrame` to throttle scroll events (e.g., `getBoundingClientRect` calculations), it is critical to explicitly clear the animation frame using `cancelAnimationFrame` within the component's unmount cleanup function. Failure to do so can lead to memory leaks and attempts to update state on an unmounted component if the callback executes after the component has been destroyed.
**Action:** Always capture the `requestAnimationFrame` ID when throttling events and include a `cancelAnimationFrame(rAfId)` call in the `useEffect` cleanup.