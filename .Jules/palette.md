## 2024-05-22 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.

## 2024-05-23 - Focus Management on Scroll
**Learning:** Programmatic scrolling (like "Back to Top") leaves keyboard focus at the trigger point (bottom of page), disorienting users.
**Action:** After scrolling, explicitly move focus to the top-most relevant content (e.g., `h1`) using `focus({ preventScroll: true })`.
