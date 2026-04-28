import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="py-16 sm:py-20 bg-white"
      aria-label="Tentang CendekiaPharma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yale-blue-700 mb-6">
            Tentang CendekiaPharma
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            CendekiaPharma adalah platform bimbingan belajar UKOM (Uji Kompetensi Mahasiswa
            Profesi Apoteker) yang dirancang khusus untuk membantu calon apoteker Indonesia
            meraih kesuksesan dalam ujian kompetensi. Kami memahami tantangan yang dihadapi
            mahasiswa profesi apoteker dalam mempersiapkan diri menghadapi UKOM.
          </p>

          <div className="bg-yale-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-yale-blue-700 mb-4">
              Misi Kami
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Membantu calon apoteker Indonesia lulus UKOM dengan menyediakan bimbingan
              belajar yang terstruktur, materi yang selalu diperbarui sesuai kisi-kisi
              terbaru, dan pendampingan dari mentor berpengalaman — sehingga setiap peserta
              dapat meraih impian menjadi apoteker profesional yang kompeten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-yale-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yale-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Kualitas Terjamin
              </h4>
              <p className="text-sm text-gray-600">
                Materi dan metode pembelajaran yang telah terbukti efektif membantu ribuan
                peserta lulus UKOM.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-celadon-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-celadon-600"
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
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Pendampingan Penuh
              </h4>
              <p className="text-sm text-gray-600">
                Mentor berpengalaman siap membimbing dan menjawab setiap pertanyaan selama
                proses belajar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-fresh-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-fresh-sky-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Komitmen Berkelanjutan
              </h4>
              <p className="text-sm text-gray-600">
                Kami terus berinovasi dan memperbarui materi agar selalu relevan dengan
                perkembangan UKOM.
              </p>
            </div>
          </div>

          <Button href="/tentang-kami" variant="primary" size="lg">
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </section>
  );
}
