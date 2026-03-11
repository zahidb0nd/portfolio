## 2025-05-22 - SecureLink Referrer Leakage
**Vulnerability:** External links opened in the same tab (`target="_self"`) did not have `rel="noopener noreferrer"`, potentially leaking referrer information to external sites.
**Learning:** Checking only for `target="_blank"` is insufficient for privacy protection. All external URLs should be treated with caution regarding referrer policy.
**Prevention:** Use URL pattern matching (e.g., regex for `http`, `https`, `//`) to identify external links regardless of target attribute and force secure attributes.

## 2025-05-22 - Missing Security Verification Infrastructure
**Vulnerability:** The repository contained security tests (`src/lib/security.test.ts`) but lacked the necessary test runner (`vitest`) to execute them, leading to a false sense of security.
**Learning:** Security controls that are not automatically verified will eventually degrade. "Broken windows" in test infrastructure obscure actual security gaps.
**Prevention:** Ensure CI/CD pipelines enforce test execution and that local development environments are initialized with all necessary tools to run security tests.

## 2024-03-11 - [Enhance SecureLink to correctly block all protocol-relative URLs from being treated as internal]
**Vulnerability:** `SecureLink` component used a loose regex `/^(https?:|\/\/)/` which failed to recognize protocol-relative URLs with leading whitespaces (e.g. ` //external.com`) as external, bypassing the `rel="noopener noreferrer"` attribute injection. This could lead to a minor reverse tabnabbing vulnerability.
**Learning:** Whitespace padding can bypass naive regexes intended to catch specific protocol starters. The `.test()` check should account for possible preceding whitespace characters when determining if a URL is external.
**Prevention:** Use a regex like `/^\s*(https?:|\/\/)/i` and ensure we trim strings or use robust URL parsing mechanisms where appropriate to determine the external nature of a URL.
