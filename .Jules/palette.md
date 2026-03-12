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
## 2025-05-27 - Unavailable Links UX Pattern
**Learning:** For unavailable links (e.g., private repositories, upcoming features), simply disabling a button removes it from keyboard navigation and prevents users from understanding why it's disabled, while adding a tooltip to a disabled button often fails because `pointer-events: none` prevents the trigger from receiving hover or focus events.
**Action:** Render a visually disabled button (`aria-disabled="true"`, `className="pointer-events-none"`) wrapped in a focusable element (`<span tabIndex={0} className="cursor-not-allowed">`) and use this span as the trigger (`<TooltipTrigger asChild>`) for a tooltip explaining the reason. This ensures full keyboard and mouse accessibility without breaking the tooltip's interaction model.
