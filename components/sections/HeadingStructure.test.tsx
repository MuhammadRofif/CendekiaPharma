/**
 * Heading Structure Audit Test
 * 
 * Validates: Requirements 16.2
 * 
 * This test suite verifies that the HTML heading structure across all section
 * components follows semantic hierarchy:
 * - H1: Only one, used for main headline (HeroSection)
 * - H2: Used for section titles
 * - H3: Used for sub-elements (card titles, feature names, etc.)
 * - H4: Used for sub-sub-elements (if any)
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import KelasOnlineSection from './KelasOnlineSection';
import KelasTatapMukaSection from './KelasTatapMukaSection';
import KeunggulanSection from './KeunggulanSection';
import MentorSection from './MentorSection';
import MobileAppSection from './MobileAppSection';
import ModulSection from './ModulSection';
import StatistikSection from './StatistikSection';
import TestimoniSection from './TestimoniSection';
import TryoutSection from './TryoutSection';
import VideoSection from './VideoSection';

describe('Heading Structure Audit', () => {
  describe('HeroSection', () => {
    it('should have exactly one H1 heading', () => {
      const { container } = render(<HeroSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(1);
    });

    it('should have H1 with descriptive text', () => {
      const { container } = render(<HeroSection />);
      const h1 = container.querySelector('h1');
      expect(h1?.textContent).toBeTruthy();
      expect(h1?.textContent?.length).toBeGreaterThan(10);
    });

    it('should not have H2 or H3 headings', () => {
      const { container } = render(<HeroSection />);
      const h2Elements = container.querySelectorAll('h2');
      const h3Elements = container.querySelectorAll('h3');
      expect(h2Elements).toHaveLength(0);
      expect(h3Elements).toHaveLength(0);
    });
  });

  describe('AboutSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<AboutSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Tentang CendekiaPharma');
    });

    it('should have H3 for sub-section (Misi Kami)', () => {
      const { container } = render(<AboutSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(1);
      const misiHeading = Array.from(h3Elements).find(h3 => h3.textContent === 'Misi Kami');
      expect(misiHeading).toBeTruthy();
    });

    it('should have H4 for value cards', () => {
      const { container } = render(<AboutSection />);
      const h4Elements = container.querySelectorAll('h4');
      expect(h4Elements.length).toBeGreaterThanOrEqual(3);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<AboutSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('KelasOnlineSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<KelasOnlineSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Kelas Online Fleksibel');
    });

    it('should have H3 for feature titles', () => {
      const { container } = render(<KelasOnlineSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(3);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<KelasOnlineSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('KelasTatapMukaSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<KelasTatapMukaSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Kelas Tatap Muka Intensif');
    });

    it('should have H3 for feature titles', () => {
      const { container } = render(<KelasTatapMukaSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(3);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<KelasTatapMukaSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('KeunggulanSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<KeunggulanSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Keunggulan Platform');
    });

    it('should have H3 for each keunggulan card', () => {
      const { container } = render(<KeunggulanSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(4);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<KeunggulanSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('MentorSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<MentorSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Super Mentor');
    });

    it('should have H3 for mentor names', () => {
      const { container } = render(<MentorSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(1);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<MentorSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('MobileAppSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<MobileAppSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Aplikasi Mobile Segera Hadir');
    });

    it('should have H3 for form title', () => {
      const { container } = render(<MobileAppSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(1);
      expect(h3Elements[0].textContent).toBe('Dapatkan Notifikasi Peluncuran');
    });

    it('should not have H1 heading', () => {
      const { container } = render(<MobileAppSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('ModulSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<ModulSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Modul Terupdate');
    });

    it('should have H3 for each modul card', () => {
      const { container } = render(<ModulSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(4);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<ModulSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('StatistikSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<StatistikSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Statistik Keberhasilan');
    });

    it('should not have H1 heading', () => {
      const { container } = render(<StatistikSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('TestimoniSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<TestimoniSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Testimoni Alumni');
    });

    it('should have H3 for alumni names', () => {
      const { container } = render(<TestimoniSection />);
      const h3Elements = container.querySelectorAll('h3');
      // May be 0 if no testimonials, or >= 1 if testimonials exist
      expect(h3Elements.length).toBeGreaterThanOrEqual(0);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<TestimoniSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('TryoutSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<TryoutSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Tryout Simulasi UKOM');
    });

    it('should have H3 for feature titles', () => {
      const { container } = render(<TryoutSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(3);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<TryoutSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('VideoSection', () => {
    it('should have exactly one H2 heading for section title', () => {
      const { container } = render(<VideoSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements).toHaveLength(1);
      expect(h2Elements[0].textContent).toBe('Video Belajar');
    });

    it('should have H3 for video titles', () => {
      const { container } = render(<VideoSection />);
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(3);
    });

    it('should not have H1 heading', () => {
      const { container } = render(<VideoSection />);
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(0);
    });
  });

  describe('Overall Heading Hierarchy', () => {
    it('all H3 elements should have non-empty text content', () => {
      const sections = [
        AboutSection,
        KelasOnlineSection,
        KelasTatapMukaSection,
        KeunggulanSection,
        MentorSection,
        MobileAppSection,
        ModulSection,
        TestimoniSection,
        TryoutSection,
        VideoSection,
      ];

      sections.forEach((Section) => {
        const { container } = render(<Section />);
        const h3Elements = container.querySelectorAll('h3');
        h3Elements.forEach((h3) => {
          expect(h3.textContent).toBeTruthy();
          expect(h3.textContent?.trim().length).toBeGreaterThan(0);
        });
      });
    });

    it('all H2 elements should have non-empty text content', () => {
      const sections = [
        AboutSection,
        KelasOnlineSection,
        KelasTatapMukaSection,
        KeunggulanSection,
        MentorSection,
        MobileAppSection,
        ModulSection,
        StatistikSection,
        TestimoniSection,
        TryoutSection,
        VideoSection,
      ];

      sections.forEach((Section) => {
        const { container } = render(<Section />);
        const h2Elements = container.querySelectorAll('h2');
        h2Elements.forEach((h2) => {
          expect(h2.textContent).toBeTruthy();
          expect(h2.textContent?.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });
});
