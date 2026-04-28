'use client';

import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { MENTOR_PROFILES } from '@/lib/constants';
import { useFadeInOnScroll } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { FALLBACK_AVATAR_SVG } from '@/lib/fallback-avatar';

export default function MentorSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MENTOR_PROFILES.length) % MENTOR_PROFILES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MENTOR_PROFILES.length);
  };

  return (
    <section id="mentor" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={isVisible ? 'animate-fade-up' : 'opacity-0'}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yale-blue-700 mb-4">
            Super Mentor
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dibimbing langsung oleh alumni terbaik dan praktisi apoteker aktif yang berpengalaman
          </p>

          {/* Desktop Grid (>= 768px) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENTOR_PROFILES.map((mentor) => (
              <Card key={mentor.id} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={mentor.photo}
                    alt={`Foto profil ${mentor.name}, mentor ${mentor.specialization}`}
                    fill
                    className="rounded-full object-cover"
                    sizes="128px"
                    unoptimized
                  />
                </div>
                <Badge
                  variant={mentor.badge === 'Alumni Terbaik' ? 'green' : 'blue'}
                  className="mb-3"
                >
                  {mentor.badge}
                </Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{mentor.education}</p>
                <p className="text-sm text-gray-600 mb-2">{mentor.experience}</p>
                <p className="text-sm font-medium text-yale-blue-600">
                  {mentor.specialization}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel (< 768px) */}
          <div className="md:hidden">
            <div className="relative">
              <Card className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={MENTOR_PROFILES[activeIndex].photo}
                    alt={`Foto profil ${MENTOR_PROFILES[activeIndex].name}, mentor ${MENTOR_PROFILES[activeIndex].specialization}`}
                    fill
                    className="rounded-full object-cover"
                    sizes="128px"
                    unoptimized
                  />
                </div>
                <Badge
                  variant={MENTOR_PROFILES[activeIndex].badge === 'Alumni Terbaik' ? 'green' : 'blue'}
                  className="mb-3"
                >
                  {MENTOR_PROFILES[activeIndex].badge}
                </Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {MENTOR_PROFILES[activeIndex].name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {MENTOR_PROFILES[activeIndex].education}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {MENTOR_PROFILES[activeIndex].experience}
                </p>
                <p className="text-sm font-medium text-yale-blue-600">
                  {MENTOR_PROFILES[activeIndex].specialization}
                </p>
              </Card>

              {/* Carousel Navigation */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-yale-blue-100 text-yale-blue-700 hover:bg-yale-blue-200 transition-colors"
                  aria-label="Mentor sebelumnya"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm text-gray-600">
                  {activeIndex + 1} / {MENTOR_PROFILES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-yale-blue-100 text-yale-blue-700 hover:bg-yale-blue-200 transition-colors"
                  aria-label="Mentor berikutnya"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
