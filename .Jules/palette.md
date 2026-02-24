## 2024-05-22 - Icon-Only Buttons Accessibility

**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.

## 2025-05-27 - Focus Management in Smooth Scroll

**Learning:** When using `scrollIntoView` for smooth scrolling, keyboard focus remains on the trigger button, which can be disorienting. Screen readers may not announce the new context.
**Action:** Shift focus to the target section (ensure it has `tabIndex="-1"`) after initiating the scroll. Use `focus({ preventScroll: true })` to update focus without fighting the smooth scroll animation. Use the `scrollToElement` helper which combines both behaviors for accessible navigation.
