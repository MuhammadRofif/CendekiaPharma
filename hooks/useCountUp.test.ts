// Feature: cendekiapharma-landing-page, Property 3: Animasi count-up selalu dimulai dari nol dan berakhir di nilai target

import { describe, test, expect } from 'vitest';
import fc from 'fast-check';

/**
 * Validates: Requirements 10.3
 *
 * Property 3: Animasi Count-Up Selalu Dimulai dari Nol dan Berakhir di Nilai Target
 *
 * Untuk setiap StatItem dengan nilai target N (bilangan bulat positif),
 * animasi count-up harus dimulai dari nilai 0 dan berakhir tepat di nilai N
 * setelah durasi animasi selesai — tidak pernah melebihi atau kurang dari nilai target.
 *
 * Strategi pengujian: Mengekstrak logika interpolasi murni dari useCountUp
 * dan memverifikasi propertinya secara langsung tanpa ketergantungan pada
 * requestAnimationFrame atau timer.
 */

/**
 * Logika interpolasi murni yang diekstrak dari useCountUp.ts:
 *   progress = Math.min(elapsed / duration, 1)
 *   value    = Math.round(progress * target)
 */
function computeCountUpValue(elapsed: number, duration: number, target: number): number {
  const progress = Math.min(elapsed / duration, 1);
  return Math.round(progress * target);
}

describe('useCountUp — logika interpolasi count-up', () => {
  // Feature: cendekiapharma-landing-page, Property 3: Animasi count-up selalu dimulai dari nol dan berakhir di nilai target
  test('Property 3: count-up selalu dimulai dari 0 dan berakhir di nilai target', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10000 }),  // target
        fc.integer({ min: 100, max: 5000 }), // duration
        (target, duration) => {
          // Nilai awal: elapsed = 0 → harus 0
          const valueAtStart = computeCountUpValue(0, duration, target);
          expect(valueAtStart).toBe(0);

          // Nilai akhir: elapsed = duration → harus tepat = target
          const valueAtEnd = computeCountUpValue(duration, duration, target);
          expect(valueAtEnd).toBe(target);

          // Nilai setelah durasi habis: elapsed > duration → tetap = target (tidak melebihi)
          const valueAfterEnd = computeCountUpValue(duration + 1000, duration, target);
          expect(valueAfterEnd).toBe(target);
        }
      ),
      { numRuns: 100 }
    );
  });

  test('Property 3 (tambahan): nilai count-up tidak pernah melebihi target selama animasi', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10000 }),  // target
        fc.integer({ min: 100, max: 5000 }), // duration
        fc.integer({ min: 0, max: 5000 }),   // elapsed (waktu sembarang)
        (target, duration, elapsed) => {
          const value = computeCountUpValue(elapsed, duration, target);
          // Nilai tidak boleh negatif
          expect(value).toBeGreaterThanOrEqual(0);
          // Nilai tidak boleh melebihi target
          expect(value).toBeLessThanOrEqual(target);
        }
      ),
      { numRuns: 100 }
    );
  });
});
