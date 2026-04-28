import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import KelasTatapMukaSection from './KelasTatapMukaSection';

describe('KelasTatapMukaSection', () => {
  it('renders the section with correct heading', () => {
    render(<KelasTatapMukaSection />);
    expect(screen.getByRole('heading', { name: /kelas tatap muka intensif/i })).toBeInTheDocument();
  });

  it('displays information about intensive offline program', () => {
    render(<KelasTatapMukaSection />);
    expect(screen.getByText(/program intensif offline/i)).toBeInTheDocument();
    expect(
      screen.getByText(/belajar langsung di kelas dengan suasana fokus dan terstruktur/i)
    ).toBeInTheDocument();
  });

  it('displays information about direct discussion with mentor', () => {
    render(<KelasTatapMukaSection />);
    expect(screen.getByText(/diskusi langsung dengan mentor/i)).toBeInTheDocument();
    expect(
      screen.getByText(/tanya jawab secara langsung dengan mentor berpengalaman/i)
    ).toBeInTheDocument();
  });

  it('displays information about networking with participants', () => {
    render(<KelasTatapMukaSection />);
    expect(screen.getByText(/networking dengan sesama peserta/i)).toBeInTheDocument();
    expect(
      screen.getByText(/bangun koneksi dengan sesama calon apoteker/i)
    ).toBeInTheDocument();
  });

  it('renders CTA button that links to registration', () => {
    render(<KelasTatapMukaSection />);
    const ctaButton = screen.getByRole('link', { name: /daftar kelas tatap muka/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#daftar');
  });

  it('renders illustration image with proper alt text', () => {
    render(<KelasTatapMukaSection />);
    const image = screen.getByAltText(
      /ilustrasi kelas tatap muka cendekiapharma dengan program intensif offline dan diskusi langsung dengan mentor/i
    );
    expect(image).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<KelasTatapMukaSection />);
    const section = container.querySelector('#kelas-tatap-muka');
    expect(section).toBeInTheDocument();
  });

  it('has proper aria-label for accessibility', () => {
    const { container } = render(<KelasTatapMukaSection />);
    const section = container.querySelector('section[aria-label="Kelas Tatap Muka CendekiaPharma"]');
    expect(section).toBeInTheDocument();
  });
});
