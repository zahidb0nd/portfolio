## 2026-02-17 - [Information Disclosure via Dev Tools]
**Vulnerability:** Production builds contained full source file paths in `code-path` attributes on DOM elements.
**Learning:** `kimi-plugin-inspect-react` was enabled unconditionally in `vite.config.ts`, exposing internal file structure.
**Prevention:** Ensure development-only plugins are wrapped in `mode === 'development'` checks in Vite configuration.
