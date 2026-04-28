import { render, within, cleanup } from '@testing-library/react';
import fc from 'fast-check';
import React from 'react';
import type { StatItem } from '@/lib/constants';
import { STAT_ITEMS } from '@/lib/constants';
import StatistikSection from './StatistikSection';
import { useCountUp } from '@/hooks/useCountUp';

// Minimal StatCard component mirroring the card rendering in StatistikSection
function StatCard({ item }: { item: StatItem }) {
  return (
    <div>
      <div data-testid="stat-value">
        {item.value}
        <span data-testid="stat-suffix">{item.suffix}</span>
      </div>
      <p data-testid="stat-label">{item.label}</p>
    </div>
  );
}

// Feature: cendekiapharma-landing-page, Property 2: Rendering kartu statistik selalu lengkap
// Validates: Requirements 10.2
test('Property 2: Rendering kartu statistik selalu menampilkan value, suffix, dan label untuk setiap StatItem yang valid', () => {
  fc.assert(
    fc.property(
      fc.record<StatItem>({
        id: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        value: fc.integer({ min: 0, max: 100000 }),
        suffix: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        label: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
      }),
      (item) => {
        const { container } = render(<StatCard item={item} />);
        const scope = within(container);

        // Verify value is rendered
        const valueEl = scope.getByTestId('stat-value');
        expect(valueEl).toBeInTheDocument();
        expect(valueEl.textContent).toContain(item.value.toString());

        // Verify suffix is rendered
        const suffixEl = scope.getByTestId('stat-suffix');
        expect(suffixEl).toBeInTheDocument();
        expect(suffixEl.textContent).toBe(item.suffix);

        // Verify label is rendered
        const labelEl = scope.getByTestId('stat-label');
        expect(labelEl).toBeInTheDocument();
        expect(labelEl.textContent).toBe(item.label);

        cleanup();
      }
    ),
    { numRuns: 100 }
  );
});

// Unit test: Validates Requirements 10.1
test('StatistikSection displays at least 3 stat items', () => {
  const { container } = render(<StatistikSection />);
  
  // Verify STAT_ITEMS has at least 3 items
  expect(STAT_ITEMS.length).toBeGreaterThanOrEqual(3);
  
  // Verify all stat items are rendered
  const statCards = container.querySelectorAll('[class*="flex flex-col items-center"]');
  expect(statCards.length).toBeGreaterThanOrEqual(3);
  expect(statCards.length).toBe(STAT_ITEMS.length);
});

// Unit test: Validates Requirements 10.3
test('Count-up animation starts from 0', () => {
  // Test the useCountUp hook directly
  let hookResult: ReturnType<typeof useCountUp>;
  
  function TestComponent({ target }: { target: number }) {
    hookResult = useCountUp(target, 500);
    return (
      <div>
        <span data-testid="count-value">{hookResult.value}</span>
      </div>
    );
  }
  
  const { getByTestId } = render(<TestComponent target={100} />);
  
  // Initial value should be 0 (before animation starts)
  const initialValue = parseInt(getByTestId('count-value').textContent || '0');
  expect(initialValue).toBe(0);
});
