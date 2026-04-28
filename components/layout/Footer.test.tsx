import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders social media links with target="_blank"', () => {
    render(<Footer />);
    const socialNames = ['Instagram', 'Twitter/X', 'YouTube', 'LinkedIn'];
    for (const name of socialNames) {
      const link = screen.getByRole('link', { name: new RegExp(name, 'i') });
      expect(link).toHaveAttribute('target', '_blank');
    }
  });

  it('renders "Kebijakan Privasi" link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /kebijakan privasi/i });
    expect(link).toBeInTheDocument();
  });

  it('renders "Syarat & Ketentuan" link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /syarat/i });
    expect(link).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/2025 CendekiaPharma/i)).toBeInTheDocument();
  });
});
