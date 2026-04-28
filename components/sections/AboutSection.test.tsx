import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  test('renders section with correct heading', () => {
    render(<AboutSection />);
    const heading = screen.getByRole('heading', { name: /tentang cendekiapharma/i, level: 2 });
    expect(heading).toBeInTheDocument();
  });

  test('renders mission statement section', () => {
    render(<AboutSection />);
    const missionHeading = screen.getByRole('heading', { name: /misi kami/i, level: 3 });
    expect(missionHeading).toBeInTheDocument();
    
    const missionText = screen.getByText(/membantu calon apoteker indonesia lulus ukom/i);
    expect(missionText).toBeInTheDocument();
  });

  test('renders platform description', () => {
    render(<AboutSection />);
    const description = screen.getByText(/cendekiapharma adalah platform bimbingan belajar ukom/i);
    expect(description).toBeInTheDocument();
  });

  test('renders all three value cards', () => {
    render(<AboutSection />);
    
    const qualityCard = screen.getByText(/kualitas terjamin/i);
    expect(qualityCard).toBeInTheDocument();
    
    const supportCard = screen.getByText(/pendampingan penuh/i);
    expect(supportCard).toBeInTheDocument();
    
    const commitmentCard = screen.getByText(/komitmen berkelanjutan/i);
    expect(commitmentCard).toBeInTheDocument();
  });

  test('renders CTA button with correct link', () => {
    render(<AboutSection />);
    const ctaButton = screen.getByRole('link', { name: /pelajari lebih lanjut/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/tentang-kami');
  });

  test('has proper semantic structure with section and aria-label', () => {
    const { container } = render(<AboutSection />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'tentang');
    expect(section).toHaveAttribute('aria-label', 'Tentang CendekiaPharma');
  });

  test('renders all value card icons', () => {
    const { container } = render(<AboutSection />);
    const svgIcons = container.querySelectorAll('svg[aria-hidden="true"]');
    // Should have 3 value card icons
    expect(svgIcons.length).toBeGreaterThanOrEqual(3);
  });
});
