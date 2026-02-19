## 2024-05-22 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.

## 2025-05-27 - Focus Management in Smooth Scroll
**Learning:** `scrollIntoView` handles visuals but leaves keyboard focus behind, disorienting users.
**Action:** Use the new `scrollToElement` helper which combines smooth scrolling with `focus({ preventScroll: true })` for accessible navigation.
