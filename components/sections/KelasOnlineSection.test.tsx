import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import KelasOnlineSection from './KelasOnlineSection';

describe('KelasOnlineSection', () => {
  it('renders the section with correct heading', () => {
    render(<KelasOnlineSection />);
    expect(screen.getByRole('heading', { name: /kelas online fleksibel/i })).toBeInTheDocument();
  });

  it('displays information about live class', () => {
    render(<KelasOnlineSection />);
    expect(screen.getByText(/live class interaktif/i)).toBeInTheDocument();
    expect(
      screen.getByText(/ikuti sesi belajar langsung dengan mentor berpengalaman/i)
    ).toBeInTheDocument();
  });

  it('displays information about recorded classes', () => {
    render(<KelasOnlineSection />);
    expect(screen.getByText(/rekaman kelas tersimpan/i)).toBeInTheDocument();
    expect(
      screen.getByText(/semua sesi terekam dan dapat diputar ulang kapan saja/i)
    ).toBeInTheDocument();
  });

  it('displays information about learning from anywhere', () => {
    render(<KelasOnlineSection />);
    expect(screen.getByText(/belajar dari mana saja/i)).toBeInTheDocument();
    expect(
      screen.getByText(/akses platform dari laptop, tablet, atau smartphone/i)
    ).toBeInTheDocument();
  });

  it('renders CTA button that links to registration', () => {
    render(<KelasOnlineSection />);
    const ctaButton = screen.getByRole('link', { name: /daftar kelas online/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#daftar');
  });

  it('renders illustration image with proper alt text', () => {
    render(<KelasOnlineSection />);
    const image = screen.getByAltText(
      /ilustrasi kelas online cendekiapharma dengan live class dan rekaman kelas/i
    );
    expect(image).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<KelasOnlineSection />);
    const section = container.querySelector('#kelas-online');
    expect(section).toBeInTheDocument();
  });

  it('has proper aria-label for accessibility', () => {
    const { container } = render(<KelasOnlineSection />);
    const section = container.querySelector('section[aria-label="Kelas Online CendekiaPharma"]');
    expect(section).toBeInTheDocument();
  });
});
