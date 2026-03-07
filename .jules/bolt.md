# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Progressive Loading with Individual Suspense Boundaries
**Learning:** Grouping multiple lazy-loaded chunks under a single React `<Suspense>` boundary causes a "waterfall" effect where the entire UI blocks until the slowest chunk finishes loading. This negates the performance benefits of code splitting below-the-fold content.
**Action:** Always wrap independent lazy-loaded route sections or heavy components in their own individual `<Suspense>` boundaries to enable true progressive rendering.
