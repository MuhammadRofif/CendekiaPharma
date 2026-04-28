/**
 * Validates an email address using a simple RFC 5322 regex.
 * Returns true if the email has a valid format, false otherwise.
 */
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Returns the next index in a circular array.
 * Wraps around from the last element to the first.
 */
export function getNextIndex(current: number, total: number): number {
  return (current + 1) % total;
}

/**
 * Returns the previous index in a circular array.
 * Wraps around from the first element to the last.
 */
export function getPrevIndex(current: number, total: number): number {
  return (current - 1 + total) % total;
}

/**
 * Converts a hex color string to its relative luminance value (WCAG 2.1).
 */
function hexToLuminance(hex: string): number {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Calculates the WCAG 2.1 contrast ratio between two hex colors.
 * Returns the ratio as a number (e.g., 4.5 means 4.5:1).
 * The lighter color is always used as L1 per the WCAG formula.
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = hexToLuminance(hex1);
  const l2 = hexToLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
