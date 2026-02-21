
/**
 * Validates if a URL is safe to use in an anchor tag.
 * Checks against a whitelist of allowed protocols (http, https, mailto, tel).
 *
 * @param url - The URL string to validate.
 * @returns true if the URL is safe or empty, false otherwise.
 */
export const isSafeUrl = (url: string): boolean => {
  if (!url) return true;
  try {
    // We use a dummy base because standard URL() constructor throws for relative URLs
    // We use 'http://dummy.com' as base so relative URLs inherit 'http' protocol
    const parsed = new URL(url, "http://dummy.com");

    // Whitelisted protocols
    const allowedProtocols = ["http:", "https:", "mailto:", "tel:"];

    return allowedProtocols.includes(parsed.protocol);
  } catch {
    // If URL parsing fails, consider it unsafe
    return false;
  }
};
