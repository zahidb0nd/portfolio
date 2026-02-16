## 2024-05-22 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.
