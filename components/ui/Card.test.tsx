import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Konten kartu</Card>);
    expect(screen.getByText('Konten kartu')).toBeInTheDocument();
  });

  it('applies default base classes', () => {
    const { container } = render(<Card>Test</Card>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('bg-white');
    expect(div.className).toContain('rounded-xl');
    expect(div.className).toContain('shadow-md');
  });

  it('applies additional className', () => {
    const { container } = render(<Card className="custom-class">Test</Card>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('custom-class');
  });

  it('renders multiple children', () => {
    render(
      <Card>
        <span>Anak 1</span>
        <span>Anak 2</span>
      </Card>
    );
    expect(screen.getByText('Anak 1')).toBeInTheDocument();
    expect(screen.getByText('Anak 2')).toBeInTheDocument();
  });
});
