## 2025-02-26 - Static Data Hoisting
**Learning:** Found multiple instances of static data (large arrays/objects) being defined inside component render functions. This causes unnecessary object recreation and garbage collection pressure on every render.
**Action:** When defining static data (lists, configs, constants) that doesn't depend on props or state, always hoist it outside the component or use `useMemo` if it must be derived. This is a simple, high-impact pattern for this codebase.
