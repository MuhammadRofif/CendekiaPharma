import '@testing-library/jest-dom';
import { vi } from 'vitest';

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
