import Image from 'next/image';
import Button from '@/components/ui/Button';
import { PLACEHOLDER_ILLUSTRATION } from '@/lib/image-placeholders';

export default function KelasOnlineSection() {
  return (
    <section
      id="kelas-online"
      className="py-16 sm:py-20 bg-white"
      aria-label="Kelas Online CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* ── Ilustrasi ── */}
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <Image
              src={PLACEHOLDER_ILLUSTRATION}
              alt="Ilustrasi kelas online CendekiaPharma dengan live class dan rekaman kelas yang dapat diakses dari mana saja"
              width={560}
              height={480}
              unoptimized
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>

          {/* ── Konten ── */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-6">
              Kelas Online Fleksibel
            </h2>

            <div className="space-y-6">
              {/* Live Class */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yale-blue-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-yale-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Live Class Interaktif
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Ikuti sesi belajar langsung dengan mentor berpengalaman. Tanya jawab
                    real-time dan diskusi materi UKOM secara mendalam.
                  </p>
                </div>
              </div>

              {/* Rekaman Kelas */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-celadon-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-celadon-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Rekaman Kelas Tersimpan
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Tidak sempat ikut live class? Tenang, semua sesi terekam dan dapat
                    diputar ulang kapan saja sesuai kebutuhanmu.
                  </p>
                </div>
              </div>

              {/* Belajar dari Mana Saja */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fresh-sky-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-fresh-sky-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Belajar dari Mana Saja
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Akses platform dari laptop, tablet, atau smartphone. Belajar di rumah,
                    kampus, atau di mana pun kamu berada dengan koneksi internet.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="#daftar" variant="primary" size="lg">
                Daftar Kelas Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
