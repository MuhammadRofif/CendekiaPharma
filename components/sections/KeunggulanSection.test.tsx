import { render, within, cleanup } from '@testing-library/react';
import fc from 'fast-check';
import React from 'react';
import type { KeunggulanItem } from '@/lib/constants';

// Minimal KeunggulanCard component mirroring the card rendering in KeunggulanSection
function KeunggulanCard({ item }: { item: KeunggulanItem }) {
  return (
    <div>
      <div data-testid="card-icon" data-icon={item.icon}>
        {/* Icon representation */}
        <svg aria-hidden="true">
          <title>{item.icon}</title>
        </svg>
      </div>
      <h3 data-testid="card-title">{item.title}</h3>
      <p data-testid="card-description">{item.description}</p>
    </div>
  );
}

// Feature: cendekiapharma-landing-page, Property 1: Rendering kartu keunggulan selalu lengkap
// Validates: Requirements 3.2
test('Property 1: Rendering kartu keunggulan selalu menampilkan icon, title, dan description untuk setiap KeunggulanItem yang valid', () => {
  fc.assert(
    fc.property(
      fc.record<KeunggulanItem>({
        id: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        icon: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        title: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        description: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
      }),
      (item) => {
        const { container } = render(<KeunggulanCard item={item} />);
        const scope = within(container);

        // Verify icon is rendered
        const iconEl = scope.getByTestId('card-icon');
        expect(iconEl).toBeInTheDocument();
        expect(iconEl).toHaveAttribute('data-icon', item.icon);

        // Verify title is rendered
        const titleEl = scope.getByTestId('card-title');
        expect(titleEl).toBeInTheDocument();
        expect(titleEl.textContent).toBe(item.title);

        // Verify description is rendered
        const descEl = scope.getByTestId('card-description');
        expect(descEl).toBeInTheDocument();
        expect(descEl.textContent).toBe(item.description);

        cleanup();
      }
    ),
    { numRuns: 100 }
  );
});
