# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2024-05-23 - Individual Suspense Boundaries for Progressive Loading
**Learning:** Wrapping multiple lazy-loaded chunks in a single `Suspense` boundary creates a network bottleneck. In `App.tsx`, all below-the-fold sections (`About`, `Skills`, `Projects`, `Contact`) were wrapped in one `<Suspense>`. This meant the UI was blocked from rendering any of these sections until the slowest chunk finished downloading.
**Action:** Always wrap independent lazy-loaded components in their own `Suspense` boundaries to enable true progressive loading, ensuring faster chunks render immediately without waiting for slower ones.