import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VideoSection from './VideoSection';
import { VIDEO_ITEMS } from '@/lib/constants';

describe('VideoSection', () => {
  it('renders the section with correct heading', () => {
    render(<VideoSection />);
    expect(screen.getByRole('heading', { name: /video belajar/i })).toBeInTheDocument();
  });

  it('displays section description', () => {
    render(<VideoSection />);
    expect(
      screen.getByText(/materi singkat, mudah dipahami, dan dapat diulang kapan saja/i)
    ).toBeInTheDocument();
  });

  it('renders all video items from constants', () => {
    render(<VideoSection />);
    VIDEO_ITEMS.forEach((video) => {
      expect(screen.getByText(video.title)).toBeInTheDocument();
    });
  });

  it('renders video thumbnails with proper alt text', () => {
    render(<VideoSection />);
    VIDEO_ITEMS.forEach((video) => {
      const image = screen.getByAltText(`Thumbnail video: ${video.title}`);
      expect(image).toBeInTheDocument();
    });
  });

  it('displays video duration for each video', () => {
    render(<VideoSection />);
    VIDEO_ITEMS.forEach((video) => {
      expect(screen.getByText(video.duration)).toBeInTheDocument();
    });
  });

  it('renders video thumbnails with lazy loading', () => {
    render(<VideoSection />);
    const images = screen.getAllByAltText(/thumbnail video:/i);
    images.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
    });
  });

  it('renders CTA button that links to registration', () => {
    render(<VideoSection />);
    const ctaButton = screen.getByRole('link', { name: /lihat semua video/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#daftar');
  });

  it('has proper section id for navigation', () => {
    const { container } = render(<VideoSection />);
    const section = container.querySelector('#video');
    expect(section).toBeInTheDocument();
  });

  it('has proper aria-label for accessibility', () => {
    const { container } = render(<VideoSection />);
    const section = container.querySelector('section[aria-label="Video Belajar CendekiaPharma"]');
    expect(section).toBeInTheDocument();
  });
});
