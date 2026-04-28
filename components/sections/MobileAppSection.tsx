'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { validateEmail } from '@/lib/utils';
import { useFadeInOnScroll } from '@/hooks/useIntersectionObserver';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function MobileAppSection() {
  const { ref, isVisible } = useFadeInOnScroll();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Alamat email tidak boleh kosong');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Format email tidak valid. Contoh: nama@domain.com');
      return;
    }

    // Submit to API
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Koneksi gagal. Periksa koneksi internet Anda.');
    }
  };

  return (
    <section
      id="aplikasi-mobile"
      className="py-16 sm:py-20 bg-gradient-to-br from-yale-blue-50 to-fresh-sky-50"
      aria-label="Download Aplikasi Mobile"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={isVisible ? 'animate-fade-up' : 'opacity-0'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-4">
                Aplikasi Mobile Segera Hadir
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Belajar lebih fleksibel dengan aplikasi CendekiaPharma untuk Android dan iOS.
                Akses materi, tryout, dan video belajar kapan saja, di mana saja.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dapatkan Notifikasi Peluncuran
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Masukkan email Anda dan kami akan memberitahu saat aplikasi diluncurkan.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email-input" className="sr-only">
                      Alamat Email
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@domain.com"
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yale-blue-600 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
                      aria-invalid={status === 'error'}
                      aria-describedby={status === 'error' ? 'email-error' : undefined}
                    />
                    {status === 'error' && (
                      <p
                        id="email-error"
                        className="mt-2 text-sm text-red-600"
                        role="alert"
                      >
                        {errorMessage}
                      </p>
                    )}
                    {status === 'success' && (
                      <p
                        className="mt-2 text-sm text-celadon-600"
                        role="status"
                      >
                        Terima kasih! Kami akan memberitahu Anda saat aplikasi diluncurkan.
                      </p>
                    )}
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full min-h-[44px] min-w-[44px]"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Mengirim...
                      </span>
                    ) : status === 'success' ? (
                      'Berhasil!'
                    ) : (
                      'Beritahu Saya'
                    )}
                  </Button>
                </form>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-6 h-6 text-celadon-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Tersedia untuk Android</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-6 h-6 text-celadon-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Tersedia untuk iOS</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mockup Visual */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-yale-blue-600 to-fresh-sky-600 rounded-[2.5rem] shadow-2xl" />
                  <div className="absolute inset-3 bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 bg-yale-blue-100 rounded-2xl flex items-center justify-center mb-4">
                        <svg
                          className="w-10 h-10 text-yale-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-yale-blue-700 mb-2">
                        CendekiaPharma
                      </h4>
                      <p className="text-xs text-gray-600">
                        Belajar UKOM di Genggaman Anda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
