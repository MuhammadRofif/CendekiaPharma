import Image from 'next/image';
import Button from '@/components/ui/Button';
import { PLACEHOLDER_ILLUSTRATION } from '@/lib/image-placeholders';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-white py-16 sm:py-20 lg:py-28"
      aria-label="Hero — CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
          {/* ── Teks ── */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-yale-blue-700 leading-tight">
              Persiapan UKOM Apoteker Terbaik untuk Generasi Hebat
            </h1>

            <p className="mt-4 text-xl font-semibold text-yale-blue-600">
              Belajar → Lulus + Jadi Apoteker Hebat
            </p>

            <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-lg">
              CendekiaPharma hadir sebagai platform bimbingan belajar UKOM (Uji Kompetensi
              Mahasiswa Profesi Apoteker) yang terstruktur, didampingi mentor berpengalaman,
              dan dilengkapi tryout simulasi CBT — semua yang kamu butuhkan untuk lulus di
              percobaan pertama.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#daftar" variant="primary" size="lg">
                Daftar Sekarang
              </Button>
              <Button href="#program" variant="secondary" size="lg">
                Lihat Program
              </Button>
            </div>
          </div>

          {/* ── Ilustrasi ── */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={PLACEHOLDER_ILLUSTRATION}
              alt="Ilustrasi mahasiswa apoteker belajar mempersiapkan UKOM bersama CendekiaPharma"
              width={560}
              height={480}
              priority
              unoptimized
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
