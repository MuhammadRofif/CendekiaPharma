import '@testing-library/jest-dom';

// Conditional import for vitest
declare global {
  var vi: any;
}

// Only use vi if it's available (in test environment)
if (typeof vi !== 'undefined') {
  // Mock CSS imports
  vi.mock('./app/globals.css', () => ({}));

  // Mock Next.js font imports
  vi.mock('next/font/google', () => ({
    Plus_Jakarta_Sans: () => ({
      className: 'plus-jakarta-sans',
      variable: '--font-plus-jakarta',
      style: { fontFamily: 'Plus Jakarta Sans' },
    }),
  }));
}
