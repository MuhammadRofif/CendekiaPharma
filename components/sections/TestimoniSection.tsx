'use client';

import Image from 'next/image';
import Card from '@/components/ui/Card';
import { TESTIMONI_ITEMS } from '@/lib/constants';
import { useFadeInOnScroll } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { getPrevIndex, getNextIndex } from '@/lib/utils';
import { FALLBACK_AVATAR_SVG } from '@/lib/fallback-avatar';

export default function TestimoniSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  if (TESTIMONI_ITEMS.length === 0) {
    return (
      <section id="testimoni" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={isVisible ? 'animate-fade-up' : 'opacity-0'}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yale-blue-700 mb-4">
              Testimoni Alumni
            </h2>
            <p className="text-center text-gray-600">
              Testimoni segera hadir
            </p>
          </div>
        </div>
      </section>
    );
  }

  const handlePrev = () => {
    setActiveIndex((prev) => getPrevIndex(prev, TESTIMONI_ITEMS.length));
  };

  const handleNext = () => {
    setActiveIndex((prev) => getNextIndex(prev, TESTIMONI_ITEMS.length));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center mb-4" aria-label={`Rating ${rating} dari 5 bintang`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={isVisible ? 'animate-fade-up' : 'opacity-0'}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yale-blue-700 mb-4">
            Testimoni Alumni
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cerita keberhasilan alumni yang telah lulus UKOM bersama CendekiaPharma
          </p>

          {/* Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <Card className="flex flex-col items-center text-center p-8">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={TESTIMONI_ITEMS[activeIndex].photo}
                  alt={`Foto profil ${TESTIMONI_ITEMS[activeIndex].name}, alumni ${TESTIMONI_ITEMS[activeIndex].batch}`}
                  fill
                  className="rounded-full object-cover"
                  sizes="96px"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {TESTIMONI_ITEMS[activeIndex].name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {TESTIMONI_ITEMS[activeIndex].batch}
              </p>
              {renderStars(TESTIMONI_ITEMS[activeIndex].rating)}
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{TESTIMONI_ITEMS[activeIndex].quote}"
              </blockquote>
            </Card>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-yale-blue-100 text-yale-blue-700 hover:bg-yale-blue-200 transition-colors"
                aria-label="Testimoni sebelumnya"
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
                {activeIndex + 1} / {TESTIMONI_ITEMS.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-yale-blue-100 text-yale-blue-700 hover:bg-yale-blue-200 transition-colors"
                aria-label="Testimoni berikutnya"
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
    </section>
  );
}
