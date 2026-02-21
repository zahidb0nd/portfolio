## 2024-05-22 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons using `asChild` prop in `Button` component need `aria-label` on the child element (e.g., `<a>`), not the `Button` itself, to be correctly announced by screen readers.
**Action:** Always check `asChild` usage and add `aria-label` to the interactive child element.

## 2024-05-23 - TooltipTrigger and Nested Buttons
**Learning:** Radix UI `TooltipTrigger` defaults to rendering a `<button>`. When wrapping an existing interactive element (like `Button` or `SecureLink`), always use `asChild` to prevent invalid HTML nesting (button inside button).
**Action:** Use `asChild` on `TooltipTrigger` when wrapping interactive components.
