import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import Navbar from './Navbar';
import { NAV_ITEMS } from '@/lib/constants';

describe('Navbar', () => {
  it('renders all navigation links from NAV_ITEMS', () => {
    render(<Navbar />);
    for (const item of NAV_ITEMS) {
      // Each label appears in both desktop and mobile nav, so use getAllByText
      const buttons = screen.getAllByText(item.label);
      expect(buttons.length).toBeGreaterThan(0);
    }
  });

  it('renders "Daftar Sekarang" CTA button', () => {
    render(<Navbar />);
    const ctaButtons = screen.getAllByText('Daftar Sekarang');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('hamburger button toggles mobile menu visibility', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button', { name: /toggle menu/i });

    // Mobile menu should not be visible initially
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('adds shadow class to header when scrolled past 50px', async () => {
    render(<Navbar />);
    const header = screen.getByRole('banner');

    // Initially no shadow
    expect(header.className).not.toContain('shadow-md');

    // Simulate scroll past threshold
    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      fireEvent.scroll(window);
    });

    expect(header.className).toContain('shadow-md');
  });

  it('removes shadow class when scrolled back to top', async () => {
    render(<Navbar />);
    const header = screen.getByRole('banner');

    // Scroll down first
    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      fireEvent.scroll(window);
    });
    expect(header.className).toContain('shadow-md');

    // Scroll back to top
    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
      fireEvent.scroll(window);
    });
    expect(header.className).not.toContain('shadow-md');
  });
});
