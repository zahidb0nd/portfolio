## 2025-05-22 - SecureLink Referrer Leakage
**Vulnerability:** External links opened in the same tab (`target="_self"`) did not have `rel="noopener noreferrer"`, potentially leaking referrer information to external sites.
**Learning:** Checking only for `target="_blank"` is insufficient for privacy protection. All external URLs should be treated with caution regarding referrer policy.
**Prevention:** Use URL pattern matching (e.g., regex for `http`, `https`, `//`) to identify external links regardless of target attribute and force secure attributes.

## 2025-05-22 - Missing Security Verification Infrastructure
**Vulnerability:** The repository contained security tests (`src/lib/security.test.ts`) but lacked the necessary test runner (`vitest`) to execute them, leading to a false sense of security.
**Learning:** Security controls that are not automatically verified will eventually degrade. "Broken windows" in test infrastructure obscure actual security gaps.
**Prevention:** Ensure CI/CD pipelines enforce test execution and that local development environments are initialized with all necessary tools to run security tests.

## 2025-10-24 - SecureLink Protocol-Relative URL Bypass
**Vulnerability:** The `SecureLink` component failed to correctly apply `rel="noopener noreferrer"` attributes to protocol-relative external URLs (e.g., `//example.com`) because it evaluated the sanitized URL instead of the original user input. Protocol-relative URLs were sanitized to `#`, causing the external link detection logic to fail.
**Learning:** Security controls that depend on URL inspection (like adding secure attributes) must be evaluated against the original, unsanitized input rather than post-sanitization values, as the sanitization process itself may alter the URL in ways that bypass subsequent security checks.
**Prevention:** Always perform security checks (like external link detection) on the raw input URL (`href`) before or independently of destructive sanitization processes.