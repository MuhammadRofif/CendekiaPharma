import { describe, test, expect } from 'vitest';
import fc from 'fast-check';
import { validateEmail, getNextIndex, getPrevIndex, getContrastRatio } from './utils';

describe('validateEmail', () => {
  // Positive test: valid emails should return true
  test('accepts valid email formats', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('nama@domain.co.id')).toBe(true);
    expect(validateEmail('test.user+tag@sub.domain.org')).toBe(true);
  });

  // Feature: cendekiapharma-landing-page, Property 5: Validasi email menolak semua format tidak valid
  // Validates: Requirements 12.4
  test('menolak semua string non-email (Property 5)', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant(''),                                    // string kosong
          fc.string().filter((s) => !s.includes('@')),       // tanpa @
          fc.string().map((s) => s + '@'),                   // tanpa domain setelah @
          fc.string().filter((s) => s.includes(' ')),        // dengan spasi
        ),
        (invalidEmail) => {
          expect(validateEmail(invalidEmail)).toBe(false);
        },
      ),
      { numRuns: 100 },
    );
  });
});

describe('getContrastRatio — aksesibilitas warna', () => {
  // Feature: cendekiapharma-landing-page, Property 7: Semua pasangan warna memenuhi rasio kontras minimal
  // Validates: Requirements 16.4
  test('semua pasangan warna design system yang digunakan memenuhi rasio kontras WCAG 4.5:1 (Property 7)', () => {
    // Pasangan warna dari design system CendekiaPharma yang memenuhi standar WCAG AA (≥ 4.5:1)
    const accessibleColorPairs: Array<{ text: string; bg: string; label: string }> = [
      { text: '#1a1a2e', bg: '#ffffff', label: 'teks utama (#1a1a2e) di atas latar putih' },
      { text: '#1666b6', bg: '#ffffff', label: 'yale-blue-600 di atas latar putih (tombol CTA)' },
      { text: '#ffffff', bg: '#1666b6', label: 'teks putih di atas yale-blue-600 (teks tombol)' },
    ];

    for (const { text, bg, label } of accessibleColorPairs) {
      const ratio = getContrastRatio(text, bg);
      expect(ratio, `Pasangan warna "${label}" harus memiliki rasio kontras ≥ 4.5:1, tetapi mendapat ${ratio.toFixed(4)}:1`).toBeGreaterThanOrEqual(4.5);
    }
  });
});

describe('carousel navigation', () => {
  // Feature: cendekiapharma-landing-page, Property 4: Navigasi carousel selalu konsisten
  // Validates: Requirements 11.3
  test('getNextIndex dan getPrevIndex selalu wrapping dengan benar (Property 4)', () => {
    fc.assert(
      fc.property(
        fc.array(fc.string(), { minLength: 1, maxLength: 20 }),
        fc.nat(),
        (items, startIndexRaw) => {
          const N = items.length;
          const startIndex = startIndexRaw % N;
          expect(getNextIndex(startIndex, N)).toBe((startIndex + 1) % N);
          expect(getPrevIndex(startIndex, N)).toBe((startIndex - 1 + N) % N);
        },
      ),
      { numRuns: 100 },
    );
  });
});
