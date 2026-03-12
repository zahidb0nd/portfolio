# Bolt's Journal ⚡

## 2024-05-23 - Performance Optimization in SecureLink
**Learning:** `new URL()` constructor is relatively expensive (approx 0.01ms - 0.1ms per call) and can add up when used in frequently re-rendered components. Memoizing this operation using `useMemo` in `SecureLink` prevents unnecessary re-parsing of URLs during parent re-renders (e.g., in `Contact` section).
**Action:** When performing heavy string parsing or validation in a reusable component, always verify if it runs on every render and memoize if necessary.

## 2025-03-12 - Suspense Boundaries for Progressive Loading
**Learning:** Using a single monolithic `<Suspense>` boundary around multiple lazy-loaded components (like separate page sections) blocks the rendering of all those sections until the slowest chunk finishes loading. This defeats the purpose of progressive loading.
**Action:** When lazy-loading multiple independent sections (e.g., in a single-page portfolio), wrap each lazy-loaded component in its own individual `<Suspense>` boundary. This allows each section to render independently as soon as its chunk is available, significantly improving perceived performance and time-to-interactive for those specific sections.
