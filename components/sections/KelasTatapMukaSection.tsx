import Image from 'next/image';
import Button from '@/components/ui/Button';
import { PLACEHOLDER_ILLUSTRATION } from '@/lib/image-placeholders';

export default function KelasTatapMukaSection() {
  return (
    <section
      id="kelas-tatap-muka"
      className="py-16 sm:py-20 bg-gray-50"
      aria-label="Kelas Tatap Muka CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12">
          {/* ── Ilustrasi ── */}
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <Image
              src={PLACEHOLDER_ILLUSTRATION}
              alt="Ilustrasi kelas tatap muka CendekiaPharma dengan program intensif offline dan diskusi langsung dengan mentor"
              width={560}
              height={480}
              unoptimized
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>

          {/* ── Konten ── */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-6">
              Kelas Tatap Muka Intensif
            </h2>

            <div className="space-y-6">
              {/* Program Intensif Offline */}
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Program Intensif Offline
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Belajar langsung di kelas dengan suasana fokus dan terstruktur. Program
                    intensif dirancang untuk memaksimalkan pemahaman materi UKOM dalam waktu
                    singkat.
                  </p>
                </div>
              </div>

              {/* Diskusi Langsung dengan Mentor */}
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
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Diskusi Langsung dengan Mentor
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Tanya jawab secara langsung dengan mentor berpengalaman. Dapatkan
                    penjelasan mendalam dan tips strategi menjawab soal UKOM dari praktisi
                    apoteker.
                  </p>
                </div>
              </div>

              {/* Networking dengan Sesama Peserta */}
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Networking dengan Sesama Peserta
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Bangun koneksi dengan sesama calon apoteker. Belajar bersama dalam
                    kelompok kecil dan saling mendukung untuk mencapai kelulusan UKOM.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="#daftar" variant="primary" size="lg">
                Daftar Kelas Tatap Muka
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
