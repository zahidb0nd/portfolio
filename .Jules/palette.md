## 2024-05-22 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.

## 2024-05-24 - Contextual Labels for Repeated Links
**Learning:** When multiple links on a page have the same text (e.g., "Code", "Demo"), screen reader users navigating by links may lose context. Adding `aria-label` with specific context (e.g., "View source code for [Project Name]") resolves this.
**Action:** Use `aria-label` to differentiate identical link texts within lists or grids.
