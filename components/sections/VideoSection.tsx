import Image from 'next/image';
import Button from '@/components/ui/Button';
import { VIDEO_ITEMS } from '@/lib/constants';

export default function VideoSection() {
  return (
    <section
      id="video"
      className="py-16 sm:py-20 bg-white"
      aria-label="Video Belajar CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header Section ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-4">
            Video Belajar
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Materi singkat, mudah dipahami, dan dapat diulang kapan saja. Akses ratusan video pembelajaran yang dirancang khusus untuk persiapan UKOM.
          </p>
        </div>

        {/* ── Video Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {VIDEO_ITEMS.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={`Thumbnail video: ${video.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-medium px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div className="text-center">
          <Button href="#daftar" variant="primary" size="lg">
            Lihat Semua Video
          </Button>
        </div>
      </div>
    </section>
  );
}
