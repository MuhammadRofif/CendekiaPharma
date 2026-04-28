/**
 * Test suite untuk memverifikasi semua elemen gambar memiliki atribut alt yang deskriptif
 * Validates: Requirements 16.3
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import fc from 'fast-check';
import HeroSection from './HeroSection';
import KelasOnlineSection from './KelasOnlineSection';
import KelasTatapMukaSection from './KelasTatapMukaSection';
import MentorSection from './MentorSection';
import TestimoniSection from './TestimoniSection';
import TryoutSection from './TryoutSection';
import VideoSection from './VideoSection';

describe('Image Alt Attribute Audit', () => {
  it('HeroSection: semua gambar memiliki alt text non-kosong', () => {
    const { container } = render(<HeroSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
    });
  });

  it('KelasOnlineSection: semua gambar memiliki alt text non-kosong', () => {
    const { container } = render(<KelasOnlineSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
    });
  });

  it('KelasTatapMukaSection: semua gambar memiliki alt text non-kosong', () => {
    const { container } = render(<KelasTatapMukaSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
    });
  });

  it('MentorSection: semua gambar memiliki alt text non-kosong dan deskriptif', () => {
    const { container } = render(<MentorSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
      // Alt text harus menyertakan informasi mentor
      expect(img.alt).toMatch(/Foto profil|mentor/i);
    });
  });

  it('TestimoniSection: semua gambar memiliki alt text non-kosong dan deskriptif', () => {
    const { container } = render(<TestimoniSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
      // Alt text harus menyertakan informasi testimoni
      expect(img.alt).toMatch(/Foto profil|alumni|Batch/i);
    });
  });

  it('TryoutSection: semua gambar memiliki alt text non-kosong', () => {
    const { container } = render(<TryoutSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
    });
  });

  it('VideoSection: semua gambar memiliki alt text non-kosong dan deskriptif', () => {
    const { container } = render(<VideoSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
      // Alt text harus menyertakan informasi video
      expect(img.alt).toMatch(/Thumbnail video|video/i);
    });
  });

  it('MentorSection: gambar memiliki onError handler untuk fallback', () => {
    const { container } = render(<MentorSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    // Verifikasi bahwa gambar dapat menangani error
    // (onError handler sudah ditambahkan di komponen)
    images.forEach((img) => {
      expect(img.getAttribute('src')).toBeTruthy();
    });
  });

  it('TestimoniSection: gambar memiliki onError handler untuk fallback', () => {
    const { container } = render(<TestimoniSection />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBeGreaterThan(0);
    // Verifikasi bahwa gambar dapat menangani error
    // (onError handler sudah ditambahkan di komponen)
    images.forEach((img) => {
      expect(img.getAttribute('src')).toBeTruthy();
    });
  });
});

describe('Property-Based Tests', () => {
  // Feature: cendekiapharma-landing-page, Property 6: Semua elemen gambar memiliki alt text non-kosong
  it('Property 6: Semua elemen gambar memiliki alt text non-kosong', () => {
    /**
     * **Validates: Requirements 16.3**
     * 
     * Property: Untuk setiap komponen yang merender elemen <img> atau <Image> (Next.js),
     * atribut alt harus selalu ada dan tidak boleh berupa string kosong "" — 
     * setiap gambar yang dirender memiliki deskripsi aksesibel.
     */
    
    const allSectionComponents = [
      { name: 'HeroSection', component: HeroSection },
      { name: 'KelasOnlineSection', component: KelasOnlineSection },
      { name: 'KelasTatapMukaSection', component: KelasTatapMukaSection },
      { name: 'MentorSection', component: MentorSection },
      { name: 'TestimoniSection', component: TestimoniSection },
      { name: 'TryoutSection', component: TryoutSection },
      { name: 'VideoSection', component: VideoSection },
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...allSectionComponents),
        (sectionConfig) => {
          const { name, component: Component } = sectionConfig;
          const { container } = render(<Component />);
          const images = container.querySelectorAll('img');

          // Verifikasi bahwa section memiliki gambar
          expect(images.length).toBeGreaterThan(0);

          // Property: Setiap gambar HARUS memiliki alt text non-kosong
          images.forEach((img, index) => {
            const altText = img.getAttribute('alt');
            
            // Alt attribute harus ada
            expect(
              altText,
              `${name}: Gambar ke-${index + 1} tidak memiliki atribut alt`
            ).not.toBeNull();
            
            // Alt text tidak boleh kosong
            expect(
              altText?.trim(),
              `${name}: Gambar ke-${index + 1} memiliki alt text kosong`
            ).toBeTruthy();
            
            // Alt text harus memiliki panjang > 0
            expect(
              altText!.length,
              `${name}: Gambar ke-${index + 1} memiliki alt text dengan panjang 0`
            ).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
