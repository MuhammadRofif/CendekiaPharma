import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = '', children }: CardProps) {
  return (
    <div
      className={[
        'bg-white rounded-xl shadow-md p-6',
        'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
