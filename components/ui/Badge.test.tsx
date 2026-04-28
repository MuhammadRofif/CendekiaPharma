import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge variant="green">Label</Badge>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('applies green variant classes', () => {
    render(<Badge variant="green">Hijau</Badge>);
    const badge = screen.getByText('Hijau');
    expect(badge.className).toContain('bg-celadon-100');
    expect(badge.className).toContain('text-celadon-700');
  });

  it('applies blue variant classes', () => {
    render(<Badge variant="blue">Biru</Badge>);
    const badge = screen.getByText('Biru');
    expect(badge.className).toContain('bg-fresh-sky-100');
    expect(badge.className).toContain('text-fresh-sky-700');
  });

  it('applies additional className', () => {
    render(<Badge variant="green" className="extra-class">Test</Badge>);
    const badge = screen.getByText('Test');
    expect(badge.className).toContain('extra-class');
  });

  it('renders as a <span>', () => {
    const { container } = render(<Badge variant="blue">Span</Badge>);
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });
});
