'use client';

import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-xl font-extrabold text-yale-blue-600 tracking-tight">
            CendekiaPharma
          </span>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-700 hover:text-yale-blue-600 transition-colors duration-150"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" href="#daftar">
              Daftar Sekarang
            </Button>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-down pb-4">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-yale-blue-600 hover:bg-yale-blue-50 rounded-md transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 px-3">
              <Button size="sm" href="#daftar" className="w-full justify-center">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
