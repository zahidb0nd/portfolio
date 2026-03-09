## 2025-05-22 - SecureLink Referrer Leakage
**Vulnerability:** External links opened in the same tab (`target="_self"`) did not have `rel="noopener noreferrer"`, potentially leaking referrer information to external sites.
**Learning:** Checking only for `target="_blank"` is insufficient for privacy protection. All external URLs should be treated with caution regarding referrer policy.
**Prevention:** Use URL pattern matching (e.g., regex for `http`, `https`, `//`) to identify external links regardless of target attribute and force secure attributes.

## 2025-05-22 - Missing Security Verification Infrastructure
**Vulnerability:** The repository contained security tests (`src/lib/security.test.ts`) but lacked the necessary test runner (`vitest`) to execute them, leading to a false sense of security.
**Learning:** Security controls that are not automatically verified will eventually degrade. "Broken windows" in test infrastructure obscure actual security gaps.
**Prevention:** Ensure CI/CD pipelines enforce test execution and that local development environments are initialized with all necessary tools to run security tests.

## 2025-05-23 - Protocol-Relative URL Obfuscation Bypass
**Vulnerability:** The external link check in `SecureLink` relied on a regex (`/^(https?:|\/\/)/`) that could be bypassed with leading whitespace, potentially preventing the application of `rel="noopener noreferrer"` to obfuscated protocol-relative URLs.
**Learning:** Malicious inputs often use simple techniques like whitespace padding to evade strict pattern matching. Validation and security checks must be resilient to such common obfuscation tactics.
**Prevention:** Use whitespace-tolerant regex patterns (e.g., `/^\s*(https?:|\/\/)/i`) and ensure checks are performed on the original, unmodified input (`href`) when verifying edge-case logic that might bypass preceding sanitization steps.
