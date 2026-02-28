import { render, screen } from '@testing-library/react';
import { SecureLink } from './SecureLink';
import { describe, it, expect } from 'vitest';

describe('SecureLink', () => {
  it('renders correctly with default props', () => {
    render(<SecureLink href="/about">About</SecureLink>);
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toHaveAttribute('href', '/about');
    expect(link).not.toHaveAttribute('rel');
    expect(link).not.toHaveAttribute('target');
  });

  it('adds rel="noopener noreferrer" for target="_blank"', () => {
    render(<SecureLink href="/about" target="_blank">About</SecureLink>);
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders "#" for unsafe URLs', () => {
    render(<SecureLink href="javascript:alert(1)">Unsafe</SecureLink>);
    const link = screen.getByRole('link', { name: /unsafe/i });
    expect(link).toHaveAttribute('href', '#');
  });

  it('should add rel="noopener noreferrer" for all external links', () => {
    // This test verifies the security enhancement
    render(<SecureLink href="https://example.com">Example</SecureLink>);
    const link = screen.getByRole('link', { name: /example/i });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should NOT add rel for internal links', () => {
    render(<SecureLink href="/internal">Internal</SecureLink>);
    const link = screen.getByRole('link', { name: /internal/i });
    expect(link).not.toHaveAttribute('rel');
  });

  it('should block protocol-relative URLs and treat them as unsafe', () => {
    render(<SecureLink href="//external.com">Protocol Relative</SecureLink>);
    const link = screen.getByRole('link', { name: /protocol relative/i });
    // Since protocol-relative URLs are considered unsafe, they are blocked to "#" and are no longer external
    expect(link).not.toHaveAttribute('rel');
    expect(link).toHaveAttribute('href', '#');
  });
});
