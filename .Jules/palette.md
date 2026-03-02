## 2024-05-22 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.

## 2024-05-23 - TooltipTrigger and Nested Buttons
**Learning:** Radix UI `TooltipTrigger` defaults to rendering a `<button>`. When wrapping an existing interactive element (like `Button` or `SecureLink`), always use `asChild` to prevent invalid HTML nesting (button inside button).
**Action:** Use `asChild` on `TooltipTrigger` when wrapping interactive components.

## 2024-05-23 - Focus Management on Scroll
**Learning:** Programmatic scrolling (like "Back to Top") leaves keyboard focus at the trigger point (bottom of page), disorienting users.
**Action:** After scrolling, explicitly move focus to the top-most relevant content (e.g., `h1`) using `focus({ preventScroll: true })`.

## 2024-05-24 - Contextual Labels for Repeated Links
**Learning:** When multiple links on a page have the same text (e.g., "Code", "Demo"), screen reader users navigating by links may lose context. Adding `aria-label` with specific context (e.g., "View source code for [Project Name]") resolves this.
**Action:** Use `aria-label` to differentiate identical link texts within lists or grids.

## 2025-05-27 - Focus Management in Smooth Scroll
**Learning:** When using `scrollIntoView` for smooth scrolling, keyboard focus remains on the trigger button, which can be disorienting. Screen readers may not announce the new context.
**Action:** Shift focus to the target section (ensure it has `tabIndex="-1"`) after initiating the scroll. Use `focus({ preventScroll: true })` to update focus without fighting the smooth scroll animation. Use the `scrollToElement` helper which combines both behaviors for accessible navigation.

## 2025-05-27 - Accessible Tooltips for Disabled Buttons
**Learning:** A standard `<button disabled>` prevents all pointer events, meaning any tooltip attached to it won't trigger on hover or focus. This makes the explanation for *why* the button is disabled completely inaccessible to users.
**Action:** To provide accessible tooltips on disabled buttons, wrap the visually disabled button (`pointer-events-none`, `opacity-50`, `aria-disabled="true"`) in a focusable `span` wrapper (`tabIndex={0}`, `cursor-not-allowed`). Attach the `TooltipTrigger` to this `span` wrapper using `asChild`.