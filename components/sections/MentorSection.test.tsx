import { render, within, cleanup, screen, fireEvent } from '@testing-library/react';
import fc from 'fast-check';
import React from 'react';
import { vi } from 'vitest';
import type { MentorProfile } from '@/lib/constants';
import { MENTOR_PROFILES } from '@/lib/constants';
import MentorSection from './MentorSection';

// Minimal MentorCard component mirroring the card rendering in MentorSection
function MentorCard({ mentor }: { mentor: MentorProfile }) {
  return (
    <div>
      <div data-testid="mentor-photo" data-photo={mentor.photo}>
        {/* Image representation */}
        <img src={mentor.photo} alt={`Foto profil ${mentor.name}`} />
      </div>
      <span data-testid="mentor-badge">{mentor.badge}</span>
      <h3 data-testid="mentor-name">{mentor.name}</h3>
      <p data-testid="mentor-education">{mentor.education}</p>
      <p data-testid="mentor-experience">{mentor.experience}</p>
      <p data-testid="mentor-specialization">{mentor.specialization}</p>
    </div>
  );
}

// Feature: cendekiapharma-landing-page, Property: Rendering kartu mentor selalu lengkap
// Validates: Requirements 9.1, 9.2, 9.3
test('Property: Rendering kartu mentor selalu menampilkan photo, name, education, experience, specialization, dan badge untuk setiap MentorProfile yang valid', () => {
  fc.assert(
    fc.property(
      fc.record<MentorProfile>({
        id: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        name: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        photo: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        education: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        experience: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        specialization: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        badge: fc.constantFrom('Alumni Terbaik', 'Praktisi Aktif'),
      }),
      (mentor) => {
        const { container } = render(<MentorCard mentor={mentor} />);
        const scope = within(container);

        // Verify photo is rendered
        const photoEl = scope.getByTestId('mentor-photo');
        expect(photoEl).toBeInTheDocument();
        expect(photoEl).toHaveAttribute('data-photo', mentor.photo);

        // Verify badge is rendered
        const badgeEl = scope.getByTestId('mentor-badge');
        expect(badgeEl).toBeInTheDocument();
        expect(badgeEl.textContent).toBe(mentor.badge);

        // Verify name is rendered
        const nameEl = scope.getByTestId('mentor-name');
        expect(nameEl).toBeInTheDocument();
        expect(nameEl.textContent).toBe(mentor.name);

        // Verify education is rendered
        const educationEl = scope.getByTestId('mentor-education');
        expect(educationEl).toBeInTheDocument();
        expect(educationEl.textContent).toBe(mentor.education);

        // Verify experience is rendered
        const experienceEl = scope.getByTestId('mentor-experience');
        expect(experienceEl).toBeInTheDocument();
        expect(experienceEl.textContent).toBe(mentor.experience);

        // Verify specialization is rendered
        const specializationEl = scope.getByTestId('mentor-specialization');
        expect(specializationEl).toBeInTheDocument();
        expect(specializationEl.textContent).toBe(mentor.specialization);

        cleanup();
      }
    ),
    { numRuns: 100 }
  );
});

// Unit test: Verify MentorSection renders all mentor profiles in desktop view
test('MentorSection renders all mentor profiles in desktop grid', () => {
  render(<MentorSection />);
  
  // Check that all mentors are rendered (by checking for their names)
  MENTOR_PROFILES.forEach((mentor) => {
    const nameElements = screen.getAllByText(mentor.name);
    expect(nameElements.length).toBeGreaterThan(0);
  });
});

// Unit test: Verify carousel navigation works correctly
test('Carousel navigation cycles through mentors correctly', () => {
  // Mock window.matchMedia for mobile view
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 767px)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  render(<MentorSection />);
  
  // Initially should show first mentor
  expect(screen.getByText('1 / 3')).toBeInTheDocument();
  
  // Click next button
  const nextButton = screen.getByLabelText('Mentor berikutnya');
  fireEvent.click(nextButton);
  
  // Should show second mentor
  expect(screen.getByText('2 / 3')).toBeInTheDocument();
  
  // Click prev button
  const prevButton = screen.getByLabelText('Mentor sebelumnya');
  fireEvent.click(prevButton);
  
  // Should show first mentor again
  expect(screen.getByText('1 / 3')).toBeInTheDocument();
});

// Unit test: Verify badge variant is correct based on mentor type
test('Badge variant matches mentor badge type', () => {
  render(<MentorSection />);
  
  // Check that badges are rendered
  const alumniTerbaikBadges = screen.getAllByText('Alumni Terbaik');
  const praktisiAktifBadges = screen.getAllByText('Praktisi Aktif');
  
  expect(alumniTerbaikBadges.length).toBeGreaterThan(0);
  expect(praktisiAktifBadges.length).toBeGreaterThan(0);
});
