# Rencana Implementasi: CendekiaPharma Landing Page

## Ikhtisar

Implementasi landing page CendekiaPharma menggunakan Next.js 14+ (App Router) dengan TypeScript dan Tailwind CSS. Pendekatan SSG (Static Site Generation) untuk performa optimal. Komponen dibangun secara inkremental dari fondasi (setup, tipe data, UI primitif) hingga section-section utama, kemudian diwiring di halaman utama.

## Tasks

- [x] 1. Setup proyek dan konfigurasi dasar
  - Inisialisasi proyek Next.js 14+ dengan TypeScript, Tailwind CSS, dan App Router
  - Konfigurasi `tailwind.config.ts` dengan color palette CendekiaPharma (yale-blue, celadon, jungle-green, emerald, fresh-sky) dan font Plus Jakarta Sans
  - Tambahkan `globals.css` dengan Tailwind base, custom CSS variables, dan keyframe `fadeUp`
  - Konfigurasi `app/layout.tsx` dengan metadata global (title, description, og:title, og:description, og:image) dan font Plus Jakarta Sans
  - Setup Vitest + React Testing Library + fast-check untuk pengujian
  - _Requirements: 15.1, 16.1_

- [x] 2. Definisi tipe data dan konstanta statis
  - [x] 2.1 Buat file `lib/constants.ts` dengan semua data statis
    - Definisikan dan ekspor tipe TypeScript: `KeunggulanItem`, `MentorProfile`, `StatItem`, `TestimoniItem`, `NavItem`, `VideoItem`, `ModulItem`
    - Isi data dummy untuk semua tipe (minimal sesuai requirement: 4 keunggulan, 3 mentor, 3 statistik, 5 testimoni)
    - _Requirements: 3.1, 9.1, 10.1, 11.1_
  - [x] 2.2 Buat file `lib/utils.ts` dengan helper functions
    - Implementasikan fungsi `validateEmail(email: string): boolean` dengan regex RFC 5322 sederhana
    - Implementasikan fungsi `getNextIndex(current: number, total: number): number` dan `getPrevIndex(current: number, total: number): number` untuk navigasi carousel
    - Implementasikan fungsi `getContrastRatio(hex1: string, hex2: string): number` untuk kalkulasi rasio kontras WCAG
    - _Requirements: 12.4, 11.3, 16.4_
  - [x] 2.3 Tulis property test untuk `validateEmail` (Property 5)
    - **Property 5: Validasi Email Menolak Semua Format Tidak Valid**
    - **Validates: Requirements 12.4**
    - Gunakan `fast-check` dengan `fc.oneof` untuk string kosong, tanpa `@`, tanpa domain, dengan spasi
    - Tag: `// Feature: cendekiapharma-landing-page, Property 5: Validasi email menolak semua format tidak valid`
  - [x] 2.4 Tulis property test untuk navigasi carousel (Property 4)
    - **Property 4: Navigasi Carousel Testimoni Selalu Konsisten**
    - **Validates: Requirements 11.3**
    - Gunakan `fast-check` dengan `fc.array` dan `fc.nat` untuk memverifikasi wrapping index
    - Tag: `// Feature: cendekiapharma-landing-page, Property 4: Navigasi carousel selalu konsisten`
  - [x] 2.5 Tulis property test untuk `getContrastRatio` (Property 7)
    - **Property 7: Semua Pasangan Warna Memenuhi Rasio Kontras Minimal**
    - **Validates: Requirements 16.4**
    - Uji semua pasangan warna teks/background dari design system CendekiaPharma
    - Tag: `// Feature: cendekiapharma-landing-page, Property 7: Semua pasangan warna memenuhi rasio kontras minimal`

- [x] 3. Komponen UI primitif
  - [x] 3.1 Buat komponen `components/ui/Button.tsx`
    - Variant: `primary` (yale-blue-600), `secondary` (outline), `ghost`
    - Props: `variant`, `size`, `href` (opsional, render sebagai `<a>`), `onClick`, `disabled`, `children`
    - Terapkan hover scale `1.02` dan transition 150ms
    - _Requirements: 2.1, 4.2, 5.2, 6.2_
  - [x] 3.2 Buat komponen `components/ui/Card.tsx`
    - Props: `className`, `children`
    - Terapkan hover `translateY(-4px)` dan shadow transition 200ms
    - _Requirements: 3.2, 9.1_
  - [x] 3.3 Buat komponen `components/ui/Badge.tsx`
    - Props: `variant` (`green` | `blue`), `children`
    - Gunakan celadon-500 untuk green, fresh-sky-500 untuk blue
    - _Requirements: 9.2_
  - [x] 3.4 Tulis unit tests untuk komponen UI primitif
    - Test render Button dengan semua variant; test render Card; test render Badge
    - _Requirements: 2.1, 3.2, 9.2_

- [x] 4. Custom hook dan animasi
  - [x] 4.1 Buat `hooks/useIntersectionObserver.ts`
    - Implementasikan `useFadeInOnScroll(threshold?: number)` yang mengembalikan `{ ref, isVisible }`
    - Gunakan `IntersectionObserver` dengan fallback langsung `isVisible = true` jika tidak didukung browser
    - _Requirements: 10.3_
  - [x] 4.2 Buat `hooks/useCountUp.ts`
    - Implementasikan `useCountUp(target: number, duration?: number)` yang mengembalikan nilai animasi saat ini
    - Animasi linear interpolation dari 0 ke `target` selama `duration` ms (default 2000ms)
    - Dimulai hanya saat dipanggil (diintegrasikan dengan `useFadeInOnScroll`)
    - _Requirements: 10.3_
  - [x] 4.3 Tulis property test untuk logika count-up (Property 3)
    - **Property 3: Animasi Count-Up Selalu Dimulai dari Nol dan Berakhir di Nilai Target**
    - **Validates: Requirements 10.3**
    - Gunakan `fast-check` dengan `fc.integer({ min: 1 })` untuk memverifikasi nilai awal 0 dan nilai akhir = target
    - Tag: `// Feature: cendekiapharma-landing-page, Property 3: Animasi count-up selalu dimulai dari nol dan berakhir di nilai target`

- [x] 5. Komponen layout: Navbar dan Footer
  - [x] 5.1 Buat `components/layout/Navbar.tsx` (Client Component)
    - State: `isScrolled`, `isMobileMenuOpen`
    - Render logo, link navigasi dari `NAV_ITEMS` di constants, tombol CTA "Daftar Sekarang"
    - Hamburger menu aktif di `< 768px` dengan slide-down animation 250ms
    - Sticky dengan shadow/backdrop-blur saat `isScrolled` (scroll > 50px)
    - Smooth scroll via `scrollIntoView({ behavior: 'smooth' })` saat link diklik
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  - [x] 5.2 Buat `components/layout/Footer.tsx` (Server Component)
    - Render logo, navigasi utama, link media sosial (target `_blank` + `rel="noopener noreferrer"`), kontak, copyright
    - Sertakan link Kebijakan Privasi dan Syarat & Ketentuan
    - Stack vertikal di mobile
    - _Requirements: 14.1, 14.2, 14.3_
  - [x] 5.3 Tulis unit tests untuk Navbar dan Footer
    - Test Navbar: render semua link; hamburger toggle; sticky class saat scroll
    - Test Footer: link sosmed memiliki `target="_blank"`; link Kebijakan Privasi ada
    - _Requirements: 1.1, 1.4, 14.2, 14.3_

- [x] 6. Checkpoint — Pastikan semua tests lulus
  - Pastikan semua tests lulus, tanyakan kepada user jika ada pertanyaan.

- [x] 7. Section statis: Hero, Keunggulan, Kelas Online, Kelas Tatap Muka
  - [x] 7.1 Buat `components/sections/HeroSection.tsx` (Server Component)
    - Render headline H1, slogan, deskripsi, tombol CTA "Daftar Sekarang" dan "Lihat Program"
    - Layout 2 kolom di desktop (teks kiri, ilustrasi kanan); 1 kolom di mobile (ilustrasi di bawah)
    - Gunakan `next/image` untuk ilustrasi dengan `priority` prop
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
  - [x] 7.2 Buat `components/sections/KeunggulanSection.tsx` (Server Component)
    - Render grid kartu keunggulan dari `KEUNGGULAN_ITEMS` di constants
    - Setiap kartu: ikon SVG, judul H3, deskripsi
    - Grid 1 kolom di mobile, 2 kolom di `sm`, 4 kolom di `lg`
    - Terapkan fade-up animation via `useFadeInOnScroll`
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 7.3 Tulis property test untuk rendering kartu keunggulan (Property 1)
    - **Property 1: Rendering Kartu Keunggulan Selalu Lengkap**
    - **Validates: Requirements 3.2**
    - Gunakan `fast-check` dengan `fc.record` untuk generate `KeunggulanItem` arbitrary dan verifikasi semua field tampil
    - Tag: `// Feature: cendekiapharma-landing-page, Property 1: Rendering kartu keunggulan selalu lengkap`
  - [x] 7.4 Buat `components/sections/KelasOnlineSection.tsx` (Server Component)
    - Render informasi live class, rekaman kelas, belajar dari mana saja
    - Sertakan tombol CTA yang mengarah ke halaman/form pendaftaran
    - _Requirements: 4.1, 4.2, 4.3_
  - [x] 7.5 Buat `components/sections/KelasTatapMukaSection.tsx` (Server Component)
    - Render informasi program intensif offline dan diskusi langsung dengan mentor
    - Sertakan tombol CTA yang mengarah ke halaman/form pendaftaran
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 8. Section statis: Tryout, Video, Modul, About
  - [x] 8.1 Buat `components/sections/TryoutSection.tsx` (Server Component)
    - Render informasi simulasi CBT, timer, analisis nilai dan ranking
    - Sertakan tombol CTA
    - _Requirements: 6.1, 6.2, 6.3_
  - [x] 8.2 Buat `components/sections/VideoSection.tsx` (Server Component)
    - Render informasi video belajar dan thumbnail dari `VIDEO_ITEMS` di constants
    - Gunakan `next/image` dengan lazy loading untuk thumbnail
    - Sertakan tombol CTA
    - _Requirements: 7.1, 7.2, 7.3_
  - [x] 8.3 Buat `components/sections/ModulSection.tsx` (Server Component)
    - Render daftar modul dari `MODUL_ITEMS` di constants dengan label "Diperbarui [bulan/tahun]"
    - Tampilkan badge format PDF/Digital
    - Sertakan tombol CTA
    - _Requirements: 8.1, 8.2, 8.3_
  - [x] 8.4 Buat `components/sections/AboutSection.tsx` (Server Component)
    - Render deskripsi CendekiaPharma, pernyataan misi, nilai-nilai platform
    - Sertakan tombol/link ke halaman tentang kami
    - _Requirements: 13.1, 13.2_

- [x] 9. Section interaktif: Mentor dan Statistik
  - [x] 9.1 Buat `components/sections/MentorSection.tsx` (Server Component dengan carousel Client)
    - Render kartu profil mentor dari `MENTOR_PROFILES` di constants
    - Setiap kartu: foto (`next/image`), nama H3, latar belakang, spesialisasi, badge (Alumni Terbaik/Praktisi Aktif)
    - Layout grid 3 kolom di desktop; carousel 1 kartu di mobile (< 768px)
    - Gunakan `Badge` component untuk label mentor
    - _Requirements: 9.1, 9.2, 9.3_
  - [x] 9.2 Buat `components/sections/StatistikSection.tsx` (Client Component)
    - Render kartu statistik dari `STAT_ITEMS` di constants
    - Integrasikan `useCountUp` dan `useFadeInOnScroll` untuk animasi count-up saat masuk viewport
    - Grid 2 kolom di mobile, 3+ kolom di desktop
    - _Requirements: 10.1, 10.2, 10.3_
  - [x] 9.3 Tulis property test untuk rendering kartu statistik (Property 2)
    - **Property 2: Rendering Kartu Statistik Selalu Lengkap**
    - **Validates: Requirements 10.2**
    - Gunakan `fast-check` dengan `fc.record` untuk generate `StatItem` arbitrary dan verifikasi nilai + suffix + label tampil
    - Tag: `// Feature: cendekiapharma-landing-page, Property 2: Rendering kartu statistik selalu lengkap`
  - [x] 9.4 Tulis unit tests untuk StatistikSection
    - Test minimal 3 stat item ditampilkan; test count-up dimulai dari 0
    - _Requirements: 10.1, 10.3_

- [x] 10. Section interaktif: Testimoni dan Mobile App
  - [x] 10.1 Buat `components/sections/TestimoniSection.tsx` (Client Component)
    - State: `activeIndex: number`
    - Render carousel testimoni dari `TESTIMONI_ITEMS` di constants
    - Setiap kartu: foto profil (`next/image`), nama, batch, kutipan, rating bintang
    - Tombol prev/next dengan navigasi wrapping menggunakan `getPrevIndex`/`getNextIndex`
    - 1 kartu per tampilan di mobile; fallback "Testimoni segera hadir" jika array kosong
    - _Requirements: 11.1, 11.2, 11.3, 11.4_
  - [x] 10.2 Buat `app/api/subscribe/route.ts` (API Route)
    - Handler `POST` yang menerima `{ email: string }`
    - Validasi server-side dengan `validateEmail` dari `lib/utils.ts`
    - Simpan ke file JSON lokal (`subscribers.json`) dengan timestamp ISO 8601
    - Return `{ success: true, message }` atau `{ success: false, error }`
    - Handle duplikat email dengan pesan informatif
    - _Requirements: 12.3, 12.4_
  - [x] 10.3 Buat `components/sections/MobileAppSection.tsx` (Client Component)
    - State: `email`, `status: 'idle' | 'loading' | 'success' | 'error'`, `errorMessage`
    - Render informasi coming soon Android & iOS, mockup visual, form email
    - Validasi client-side dengan `validateEmail` sebelum submit
    - Submit ke `POST /api/subscribe`; tampilkan pesan konfirmasi/error sesuai tabel error handling
    - Area sentuh semua elemen interaktif minimal 44x44px
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 15.4_
  - [x] 10.4 Tulis unit tests untuk TestimoniSection dan MobileAppSection
    - Test carousel next/prev berfungsi; test fallback testimoni kosong
    - Test form submit email valid → pesan sukses; email invalid → pesan error
    - _Requirements: 11.3, 12.3, 12.4_

- [x] 11. Checkpoint — Pastikan semua tests lulus
  - Pastikan semua tests lulus, tanyakan kepada user jika ada pertanyaan.

- [x] 12. Aksesibilitas dan property test gambar
  - [x] 12.1 Audit dan perbaiki atribut `alt` pada semua komponen yang menggunakan `<Image>` atau `<img>`
    - Pastikan setiap elemen gambar memiliki atribut `alt` yang deskriptif dan tidak kosong
    - Tambahkan `onError` handler pada gambar mentor dan testimoni untuk fallback avatar SVG
    - _Requirements: 16.3_
  - [x] 12.2 Tulis property test untuk alt text gambar (Property 6)
    - **Property 6: Semua Elemen Gambar Memiliki Alt Text Non-Kosong**
    - **Validates: Requirements 16.3**
    - Render setiap komponen section dan verifikasi tidak ada `<img>` dengan `alt=""` atau tanpa `alt`
    - Tag: `// Feature: cendekiapharma-landing-page, Property 6: Semua elemen gambar memiliki alt text non-kosong`
  - [x] 12.3 Audit struktur heading HTML
    - Pastikan H1 hanya ada satu (di HeroSection), H2 untuk judul setiap section, H3 untuk sub-elemen
    - _Requirements: 16.2_

- [x] 13. Wiring: Komposisi halaman utama
  - [x] 13.1 Buat `app/page.tsx` sebagai Server Component utama
    - Import dan susun semua section dalam urutan: Navbar, HeroSection, KeunggulanSection, KelasOnlineSection, KelasTatapMukaSection, TryoutSection, VideoSection, ModulSection, MentorSection, StatistikSection, TestimoniSection, MobileAppSection, AboutSection, Footer
    - Tambahkan `id` anchor pada setiap section untuk smooth scroll navigasi
    - Pastikan SSG berjalan dengan benar (tidak ada `dynamic = 'force-dynamic'`)
    - _Requirements: 1.3, 2.4, 15.1_
  - [x] 13.2 Tulis integration tests untuk halaman utama
    - Test semua section ter-render di halaman; test meta tags SEO ada
    - _Requirements: 16.1, 16.2_

- [x] 14. Checkpoint final — Pastikan semua tests lulus
  - Pastikan semua tests lulus, tanyakan kepada user jika ada pertanyaan.

## Catatan

- Task bertanda `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task mereferensikan requirement spesifik untuk keterlacakan
- Property tests menggunakan `fast-check` dengan minimal 100 iterasi per property
- Unit tests menggunakan Vitest + React Testing Library
- Checkpoint memastikan validasi inkremental sebelum melanjutkan ke fase berikutnya
- Semua gambar menggunakan `next/image` dengan `placeholder="blur"` untuk UX optimal
