## 2025-05-22 - SecureLink Referrer Leakage
**Vulnerability:** External links opened in the same tab (`target="_self"`) did not have `rel="noopener noreferrer"`, potentially leaking referrer information to external sites.
**Learning:** Checking only for `target="_blank"` is insufficient for privacy protection. All external URLs should be treated with caution regarding referrer policy.
**Prevention:** Use URL pattern matching (e.g., regex for `http`, `https`, `//`) to identify external links regardless of target attribute and force secure attributes.

## 2025-05-22 - Missing Security Verification Infrastructure
**Vulnerability:** The repository contained security tests (`src/lib/security.test.ts`) but lacked the necessary test runner (`vitest`) to execute them, leading to a false sense of security.
**Learning:** Security controls that are not automatically verified will eventually degrade. "Broken windows" in test infrastructure obscure actual security gaps.
**Prevention:** Ensure CI/CD pipelines enforce test execution and that local development environments are initialized with all necessary tools to run security tests.

## 2025-05-23 - URL Parsing Case Sensitivity and Whitespace Vulnerability
**Vulnerability:** External URLs with leading whitespace or uppercase protocols (e.g., ` HTTP://example.com`) were not identified as external, bypassing the `rel="noopener noreferrer"` injection and leading to potential referrer leakage.
**Learning:** When using regex to check URLs that are later sanitized or parsed by lenient engines (like the browser's `URL` constructor), ensure the regex accounts for whitespace (`\s*`) and case-insensitivity (`/i`).
**Prevention:** Always use `/^\s*(https?:|\/\/)/i` instead of `/^(https?:|\/\/)/`, or parse the URL explicitly using the `URL` constructor before performing string matching.
