import { describe, it, expect } from 'vitest';
import { isSafeUrl } from './security';

describe('isSafeUrl', () => {
  it('should allow safe protocols', () => {
    expect(isSafeUrl('http://example.com')).toBe(true);
    expect(isSafeUrl('https://example.com')).toBe(true);
    expect(isSafeUrl('mailto:user@example.com')).toBe(true);
    expect(isSafeUrl('tel:+1234567890')).toBe(true);
  });

  it('should block unsafe protocols', () => {
    expect(isSafeUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeUrl('vbscript:msgbox(1)')).toBe(false);
    expect(isSafeUrl('data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==')).toBe(false);
    expect(isSafeUrl('file:///etc/passwd')).toBe(false);
    expect(isSafeUrl('ftp://example.com')).toBe(false); // ftp is not in whitelist
  });

  it('should handle relative URLs as safe (inherits http)', () => {
    expect(isSafeUrl('/about')).toBe(true);
    expect(isSafeUrl('contact')).toBe(true);
    expect(isSafeUrl('./skills')).toBe(true);
  });

  it('should handle protocol-relative URLs as safe (inherits http)', () => {
    // //example.com is treated as http://example.com by the dummy base logic
    expect(isSafeUrl('//example.com')).toBe(true);
  });

  it('should handle empty or null input', () => {
    expect(isSafeUrl('')).toBe(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isSafeUrl(null as any)).toBe(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isSafeUrl(undefined as any)).toBe(true);
  });

  it('should handle whitespace around unsafe protocols', () => {
    expect(isSafeUrl(' javascript:alert(1) ')).toBe(false);
    expect(isSafeUrl('\tjavascript:alert(1)')).toBe(false);
  });

  it('should handle mixed case protocols', () => {
    expect(isSafeUrl('JaVaScRiPt:alert(1)')).toBe(false);
    expect(isSafeUrl('MAILTO:user@example.com')).toBe(true);
  });
});
