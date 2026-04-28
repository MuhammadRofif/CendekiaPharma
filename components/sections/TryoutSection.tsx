import Image from 'next/image';
import Button from '@/components/ui/Button';
import { PLACEHOLDER_ILLUSTRATION } from '@/lib/image-placeholders';

export default function TryoutSection() {
  return (
    <section
      id="tryout"
      className="py-16 sm:py-20 bg-gradient-to-br from-yale-blue-50 to-fresh-sky-50"
      aria-label="Tryout Simulasi UKOM CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12">
          {/* ── Ilustrasi ── */}
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <Image
              src={PLACEHOLDER_ILLUSTRATION}
              alt="Ilustrasi simulasi CBT UKOM dengan timer dan analisis nilai serta ranking peserta"
              width={560}
              height={480}
              unoptimized
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>

          {/* ── Konten ── */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-6">
              Tryout Simulasi UKOM
            </h2>

            <div className="space-y-6">
              {/* Simulasi CBT */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yale-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-yale-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Simulasi CBT Realistis
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Rasakan pengalaman ujian UKOM yang sesungguhnya dengan format Computer-Based Test (CBT) yang identik dengan ujian nasional.
                  </p>
                </div>
              </div>

              {/* Timer Sesuai Durasi Ujian */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-celadon-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-celadon-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Timer Sesuai Ujian Nyata
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Latih manajemen waktu dengan timer yang disesuaikan dengan durasi ujian UKOM sebenarnya. Biasakan diri dengan tekanan waktu ujian.
                  </p>
                </div>
              </div>

              {/* Analisis Nilai & Ranking */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fresh-sky-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-fresh-sky-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Analisis Nilai & Ranking
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Dapatkan laporan lengkap hasil tryout dengan analisis per topik, perbandingan dengan peserta lain, dan rekomendasi materi yang perlu diperdalam.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="#daftar" variant="primary" size="lg">
                Coba Tryout Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
