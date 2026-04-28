import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-yale-blue-600 text-white hover:bg-yale-blue-700',
  secondary:
    'border-2 border-yale-blue-600 text-yale-blue-600 hover:bg-yale-blue-50',
  ghost:
    'text-yale-blue-600 hover:bg-yale-blue-50',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const baseClasses =
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-yale-blue-600 focus-visible:ring-offset-2';

const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  children,
  className = '',
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? disabledClasses : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={classes}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
