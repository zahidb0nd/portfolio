## 2024-05-23 - Protocol-Relative URL Bypass in isSafeUrl
**Vulnerability:** The `isSafeUrl` utility allowed protocol-relative URLs (e.g., `//example.com`) because `new URL()` inherits the protocol from the base URL (e.g., `http:`), making them appear safe.
**Learning:** Standard URL parsing libraries often resolve protocol-relative URLs against the base, which can mask their true nature as external redirects.
**Prevention:** Explicitly check for and reject URLs starting with `//` (ignoring whitespace) before parsing, if strict protocol validation is required.
