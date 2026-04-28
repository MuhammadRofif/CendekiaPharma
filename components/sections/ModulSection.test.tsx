import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ModulSection from './ModulSection';
import { MODUL_ITEMS } from '@/lib/constants';

describe('ModulSection', () => {
  it('renders the section with correct heading', () => {
    render(<ModulSection />);
    expect(screen.getByRole('heading', { name: /modul terupdate/i })).toBeInTheDocument();
  });

  it('displays section description', () => {
    render(<ModulSection />);
    expect(
      screen.getByText(/kisi-kisi terbaru, ringkasan materi, serta format pdf dan catatan digital/i)
    ).toBeInTheDocument();
  });

  it('renders all modul items from constants', () => {
    render(<ModulSection />);
    MODUL_ITEMS.forEach((modul) => {
      expect(screen.getByText(modul.title)).toBeInTheDocument();
    });
  });

  it('displays category for each modul', () => {
    render(<ModulSection />);
    MODUL_ITEMS.forEach((modul) => {
      expect(screen.getByText(modul.category)).toBeInTheDocument();
    });
  });

  it('displays format badge for each modul', () => {
    render(<ModulSection />);
    MODUL_ITEMS.forEach((modul) => {
      const badges = screen.getAllByText(modul.format);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  it('displays updated date with "Diperbarui" label for each modul', () => {
    render(<ModulSection />);
    MODUL_ITEMS.forEach((modul) => {
      const updatedTexts = screen.getAllByText(`Diperbarui ${modul.updatedAt}`);
      expect(updatedTexts.length).toBeGreaterThan(0);
    });
  });

  it('renders CTA button that links to registration', () => {
    render(<ModulSection />);
    const ctaButton = screen.getByRole('link', { name: /akses semua modul/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#daftar');
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<ModulSection />);
    const section = container.querySelector('#modul');
    expect(section).toBeInTheDocument();
  });

  it('has proper aria-label for accessibility', () => {
    const { container } = render(<ModulSection />);
    const section = container.querySelector('section[aria-label="Modul Terupdate CendekiaPharma"]');
    expect(section).toBeInTheDocument();
  });
});
