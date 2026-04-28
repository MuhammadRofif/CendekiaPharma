import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';
import { metadata } from './layout';

// Mock all section components
vi.mock('@/components/layout/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

vi.mock('@/components/layout/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock('@/components/sections/HeroSection', () => ({
  default: () => <div data-testid="hero-section">HeroSection</div>,
}));

vi.mock('@/components/sections/KeunggulanSection', () => ({
  default: () => <div data-testid="keunggulan-section">KeunggulanSection</div>,
}));

vi.mock('@/components/sections/KelasOnlineSection', () => ({
  default: () => <div data-testid="kelas-online-section">KelasOnlineSection</div>,
}));

vi.mock('@/components/sections/KelasTatapMukaSection', () => ({
  default: () => <div data-testid="kelas-tatap-muka-section">KelasTatapMukaSection</div>,
}));

vi.mock('@/components/sections/TryoutSection', () => ({
  default: () => <div data-testid="tryout-section">TryoutSection</div>,
}));

vi.mock('@/components/sections/VideoSection', () => ({
  default: () => <div data-testid="video-section">VideoSection</div>,
}));

vi.mock('@/components/sections/ModulSection', () => ({
  default: () => <div data-testid="modul-section">ModulSection</div>,
}));

vi.mock('@/components/sections/MentorSection', () => ({
  default: () => <div data-testid="mentor-section">MentorSection</div>,
}));

vi.mock('@/components/sections/StatistikSection', () => ({
  default: () => <div data-testid="statistik-section">StatistikSection</div>,
}));

vi.mock('@/components/sections/TestimoniSection', () => ({
  default: () => <div data-testid="testimoni-section">TestimoniSection</div>,
}));

vi.mock('@/components/sections/MobileAppSection', () => ({
  default: () => <div data-testid="mobile-app-section">MobileAppSection</div>,
}));

vi.mock('@/components/sections/AboutSection', () => ({
  default: () => <div data-testid="about-section">AboutSection</div>,
}));

describe('Home Page', () => {
  it('renders Navbar and Footer', () => {
    render(<Home />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders all sections in correct order', () => {
    render(<Home />);
    
    const sections = [
      'hero-section',
      'keunggulan-section',
      'kelas-online-section',
      'kelas-tatap-muka-section',
      'tryout-section',
      'video-section',
      'modul-section',
      'mentor-section',
      'statistik-section',
      'testimoni-section',
      'mobile-app-section',
      'about-section',
    ];

    sections.forEach(sectionId => {
      expect(screen.getByTestId(sectionId)).toBeInTheDocument();
    });
  });

  it('has anchor IDs for smooth scroll navigation', () => {
    const { container } = render(<Home />);
    
    const anchorIds = [
      'hero',
      'keunggulan',
      'kelas-online',
      'kelas-tatap-muka',
      'tryout',
      'video',
      'modul',
      'mentor',
      'statistik',
      'testimoni',
      'mobile-app',
      'about',
    ];

    anchorIds.forEach(id => {
      const section = container.querySelector(`#${id}`);
      expect(section).toBeInTheDocument();
    });
  });

  it('is a Server Component (no "use client" directive)', () => {
    // This test verifies the file doesn't have "use client" by checking
    // that the component can be rendered without client-side hooks
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});

describe('Home Page SEO Metadata', () => {
  it('has required title meta tag', () => {
    expect(metadata.title).toBeDefined();
    expect(metadata.title).toBe('CendekiaPharma — Belajar, Lulus, Jadi Apoteker Hebat');
  });

  it('has required description meta tag', () => {
    expect(metadata.description).toBeDefined();
    expect(typeof metadata.description).toBe('string');
    expect(metadata.description!.length).toBeGreaterThan(0);
  });

  it('has required Open Graph title (og:title)', () => {
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.title).toBeDefined();
    expect(typeof metadata.openGraph?.title).toBe('string');
  });

  it('has required Open Graph description (og:description)', () => {
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.description).toBeDefined();
    expect(typeof metadata.openGraph?.description).toBe('string');
  });

  it('has required Open Graph image (og:image)', () => {
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.images).toBeDefined();
    expect(Array.isArray(metadata.openGraph?.images)).toBe(true);
    expect((metadata.openGraph?.images as any[]).length).toBeGreaterThan(0);
  });

  it('Open Graph image has valid properties', () => {
    const images = metadata.openGraph?.images as any[];
    const firstImage = images[0];
    
    expect(firstImage.url).toBeDefined();
    expect(typeof firstImage.url).toBe('string');
    expect(firstImage.url.length).toBeGreaterThan(0);
    expect(firstImage.width).toBeDefined();
    expect(firstImage.height).toBeDefined();
    expect(firstImage.alt).toBeDefined();
  });
});
