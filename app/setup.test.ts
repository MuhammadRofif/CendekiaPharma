// Smoke test — verifikasi setup Vitest + React Testing Library + fast-check
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

describe('Setup proyek', () => {
  it('Vitest berjalan dengan benar', () => {
    expect(true).toBe(true);
  });

  it('fast-check tersedia dan berfungsi', () => {
    fc.assert(
      fc.property(fc.integer(), (n) => {
        return typeof n === 'number';
      }),
      { numRuns: 10 }
    );
  });
});
