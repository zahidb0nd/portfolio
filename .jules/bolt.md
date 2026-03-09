# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Individual Suspense Boundaries for Progressive Loading
**Learning:** Grouping multiple lazy-loaded components under a single `Suspense` boundary blocks the rendering of all components until the slowest chunk is loaded.
**Action:** Wrap each lazy-loaded component in its own individual `Suspense` boundary to enable independent progressive rendering and hydration, improving Time To Interactive (TTI) and First Contentful Paint (FCP) for faster-loading chunks.
