## 2025-05-22 - SecureLink Referrer Leakage
**Vulnerability:** External links opened in the same tab (`target="_self"`) did not have `rel="noopener noreferrer"`, potentially leaking referrer information to external sites.
**Learning:** Checking only for `target="_blank"` is insufficient for privacy protection. All external URLs should be treated with caution regarding referrer policy.
**Prevention:** Use URL pattern matching (e.g., regex for `http`, `https`, `//`) to identify external links regardless of target attribute and force secure attributes.

## 2025-05-22 - Missing Security Verification Infrastructure
**Vulnerability:** The repository contained security tests (`src/lib/security.test.ts`) but lacked the necessary test runner (`vitest`) to execute them, leading to a false sense of security.
**Learning:** Security controls that are not automatically verified will eventually degrade. "Broken windows" in test infrastructure obscure actual security gaps.
**Prevention:** Ensure CI/CD pipelines enforce test execution and that local development environments are initialized with all necessary tools to run security tests.

## 2025-05-22 - SecureLink Referrer Leakage Bypass with Whitespace
**Vulnerability:** External links in `SecureLink` bypassed the security check and omitted `rel="noopener noreferrer"` if they started with whitespace (e.g., ` href=" https://example.com"`).
**Learning:** URL pattern matching must account for leading whitespace because browsers ignore it, but naive regexes do not.
**Prevention:** Add `^\s*` to the beginning of URL validation regexes and use the `/i` flag for case-insensitive matching.
