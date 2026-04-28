import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TryoutSection from './TryoutSection';

describe('TryoutSection', () => {
  it('renders the section with correct heading', () => {
    render(<TryoutSection />);
    expect(screen.getByRole('heading', { name: /tryout simulasi ukom/i })).toBeInTheDocument();
  });

  it('displays information about CBT simulation', () => {
    render(<TryoutSection />);
    expect(screen.getByText(/simulasi cbt realistis/i)).toBeInTheDocument();
    expect(
      screen.getByText(/rasakan pengalaman ujian ukom yang sesungguhnya dengan format computer-based test/i)
    ).toBeInTheDocument();
  });

  it('displays information about timer matching real exam duration', () => {
    render(<TryoutSection />);
    expect(screen.getByText(/timer sesuai ujian nyata/i)).toBeInTheDocument();
    expect(
      screen.getByText(/latih manajemen waktu dengan timer yang disesuaikan dengan durasi ujian ukom sebenarnya/i)
    ).toBeInTheDocument();
  });

  it('displays information about score analysis and ranking', () => {
    render(<TryoutSection />);
    expect(screen.getByText(/analisis nilai & ranking/i)).toBeInTheDocument();
    expect(
      screen.getByText(/dapatkan laporan lengkap hasil tryout dengan analisis per topik/i)
    ).toBeInTheDocument();
  });

  it('renders CTA button that links to registration', () => {
    render(<TryoutSection />);
    const ctaButton = screen.getByRole('link', { name: /coba tryout gratis/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#daftar');
  });

  it('renders illustration image with proper alt text', () => {
    render(<TryoutSection />);
    const image = screen.getByAltText(
      /ilustrasi simulasi cbt ukom dengan timer dan analisis nilai serta ranking peserta/i
    );
    expect(image).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<TryoutSection />);
    const section = container.querySelector('#tryout');
    expect(section).toBeInTheDocument();
  });

  it('has proper aria-label for accessibility', () => {
    const { container } = render(<TryoutSection />);
    const section = container.querySelector('section[aria-label="Tryout Simulasi UKOM CendekiaPharma"]');
    expect(section).toBeInTheDocument();
  });
});
