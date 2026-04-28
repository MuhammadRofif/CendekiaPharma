import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { MODUL_ITEMS } from '@/lib/constants';

export default function ModulSection() {
  return (
    <section
      id="modul"
      className="py-16 sm:py-20 bg-gray-50"
      aria-label="Modul Terupdate CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header Section ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-4">
            Modul Terupdate
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Kisi-kisi terbaru, ringkasan materi, serta format PDF dan catatan digital. Semua modul diperbarui sesuai silabus UKOM terkini.
          </p>
        </div>

        {/* ── Modul Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {MODUL_ITEMS.map((modul) => (
            <div
              key={modul.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Category & Format Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {modul.category}
                </span>
                <Badge variant={modul.format === 'PDF' ? 'blue' : 'green'}>
                  {modul.format}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                {modul.title}
              </h3>

              {/* Updated Date */}
              <p className="text-sm text-gray-500">
                Diperbarui {modul.updatedAt}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div className="text-center">
          <Button href="#daftar" variant="primary" size="lg">
            Akses Semua Modul
          </Button>
        </div>
      </div>
    </section>
  );
}
