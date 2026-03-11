# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-24 - Suspense Boundaries for Lazy Loaded Components
**Learning:** Grouping multiple `React.lazy` components under a single `<Suspense>` boundary causes a "slowest common denominator" rendering block. The entire group's fallback is displayed until the *slowest* chunk finishes loading, delaying the render of components whose chunks have already loaded.
**Action:** Wrap individual lazy-loaded sections in their own `<Suspense>` boundaries so they can progressively render and display independently as their chunks resolve.
