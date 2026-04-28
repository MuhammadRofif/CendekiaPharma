'use client';

import { STAT_ITEMS } from '@/lib/constants';
import { useFadeInOnScroll } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { useEffect } from 'react';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: displayValue, start } = useCountUp(value, 2000);
  const { ref, isVisible } = useFadeInOnScroll(0.2);

  useEffect(() => {
    if (isVisible) {
      start();
    }
  }, [isVisible, start]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-yale-blue-600 mb-2">
        {displayValue}
        <span className="text-celadon-500">{suffix}</span>
      </div>
      <p className="text-base sm:text-lg font-medium text-gray-700 text-center">{label}</p>
    </div>
  );
}

export default function StatistikSection() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section id="statistik" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={isVisible ? 'animate-fade-up' : 'opacity-0'}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yale-blue-700 mb-12">
            Statistik Keberhasilan
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {STAT_ITEMS.map((stat) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
