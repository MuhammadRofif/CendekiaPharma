// Tipe data statis untuk CendekiaPharma Landing Page

export interface KeunggulanItem {
  id: string;
  icon: string; // nama ikon SVG
  title: string;
  description: string; // maks 2 kalimat
}

export interface MentorProfile {
  id: string;
  name: string;
  photo: string; // path ke gambar WebP
  education: string;
  experience: string;
  specialization: string;
  badge: 'Alumni Terbaik' | 'Praktisi Aktif';
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string; // "+", "%", dll.
  label: string;
}

export interface TestimoniItem {
  id: string;
  name: string;
  photo: string;
  batch: string; // contoh: "Batch 42 - 2024"
  quote: string;
  rating: number; // 1-5
}

export interface NavItem {
  label: string;
  href: string; // anchor ID, contoh: "#keunggulan"
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}

export interface ModulItem {
  id: string;
  title: string;
  category: string;
  updatedAt: string; // contoh: "Juni 2025"
  format: 'PDF' | 'Digital';
}

// ─── Data Konstanta ───────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Kelas Online', href: '#kelas-online' },
  { label: 'Kelas Tatap Muka', href: '#kelas-tatap-muka' },
  { label: 'Tryout', href: '#tryout' },
  { label: 'Mentor', href: '#mentor' },
  { label: 'Testimoni', href: '#testimoni' },
];

export const KEUNGGULAN_ITEMS: KeunggulanItem[] = [
  {
    id: 'keunggulan-1',
    icon: 'icon-target',
    title: 'Belajar Terarah',
    description:
      'Kurikulum dirancang khusus mengikuti kisi-kisi UKOM terbaru sehingga belajar lebih fokus dan efisien. Setiap materi disusun secara sistematis dari dasar hingga tingkat lanjut.',
  },
  {
    id: 'keunggulan-2',
    icon: 'icon-mentor',
    title: 'Mentor Berpengalaman',
    description:
      'Dibimbing langsung oleh alumni terbaik dan praktisi apoteker aktif yang telah membantu ribuan peserta lulus UKOM. Mentor kami memahami pola soal dan strategi ujian secara mendalam.',
  },
  {
    id: 'keunggulan-3',
    icon: 'icon-book-update',
    title: 'Materi Sesuai UKOM Terbaru',
    description:
      'Seluruh modul dan soal tryout diperbarui secara berkala mengikuti silabus dan regulasi UKOM terkini. Kamu tidak perlu khawatir belajar materi yang sudah tidak relevan.',
  },
  {
    id: 'keunggulan-4',
    icon: 'icon-flexible',
    title: 'Fleksibilitas Belajar',
    description:
      'Tersedia pilihan kelas online maupun tatap muka yang dapat disesuaikan dengan jadwal dan gaya belajarmu. Akses materi kapan saja dan di mana saja melalui platform digital kami.',
  },
];

export const MENTOR_PROFILES: MentorProfile[] = [
  {
    id: 'mentor-1',
    name: 'Mas Ari',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    education: 'S1 Farmasi, Profesi Apoteker',
    experience: '5 tahun pengalaman mengajar persiapan UKOM, 300+ peserta lulus',
    specialization: 'Farmakologi Klinik & Farmakoterapi',
    badge: 'Alumni Terbaik',
  },
  {
    id: 'mentor-2',
    name: 'Temannya mas Ari',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    education: 'S1 Farmasi, Profesi Apoteker',
    experience: '5 tahun pengalaman mengajar persiapan UKOM, 300+ peserta lulus',
    specialization: 'Farmakologi Klinik & Farmakoterapi',
    badge: 'Alumni Terbaik',
  },
  {
    id: 'mentor-3',
    name: 'Temannya mas Ari',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    education: 'S1 Farmasi, Profesi Apoteker',
    experience: '5 tahun pengalaman mengajar persiapan UKOM, 300+ peserta lulus',
    specialization: 'Farmakologi Klinik & Farmakoterapi',
    badge: 'Alumni Terbaik',
  },
];

export const STAT_ITEMS: StatItem[] = [
  {
    id: 'stat-1',
    value: 5000,
    suffix: '+',
    label: 'Peserta Terdaftar',
  },
  {
    id: 'stat-2',
    value: 92,
    suffix: '%',
    label: 'Tingkat Kelulusan UKOM',
  },
  {
    id: 'stat-3',
    value: 150,
    suffix: '+',
    label: 'Batch Aktif',
  },
];

export const TESTIMONI_ITEMS: TestimoniItem[] = [
  {
    id: 'testimoni-1',
    name: 'Udin',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    batch: 'Batch 40 - 2024',
    quote:
      'Berkat CendekiaPharma, saya berhasil lulus UKOM di percobaan pertama! Materi yang disajikan sangat terstruktur dan mentor selalu siap membantu menjawab pertanyaan.',
    rating: 5,
  },
  {
    id: 'testimoni-2',
    name: 'Epan',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    batch: 'Batch 38 - 2023',
    quote:
      'Tryout simulasi CBT-nya sangat mirip dengan ujian asli. Saya jadi lebih percaya diri dan tidak kaget saat hari H ujian berlangsung.',
    rating: 5,
  },
  {
    id: 'testimoni-3',
    name: 'Randi',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    batch: 'Batch 41 - 2024',
    quote:
      'Kelas tatap muka intensifnya luar biasa! Diskusi langsung dengan mentor membuat saya memahami konsep yang selama ini sulit dipahami hanya dari buku.',
    rating: 5,
  },
  {
    id: 'testimoni-4',
    name: 'Agung',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    batch: 'Batch 39 - 2023',
    quote:
      'Modulnya selalu diperbarui sesuai silabus terbaru. Saya tidak perlu khawatir belajar materi yang sudah tidak relevan dengan UKOM.',
    rating: 4,
  },
  {
    id: 'testimoni-5',
    name: 'Rofif',
    photo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%2315527a"/%3E%3Cpath d="M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z" fill="%23ffffff"/%3E%3C/svg%3E',
    batch: 'Batch 42 - 2024',
    quote:
      'Fleksibilitas belajar online sangat membantu karena saya bisa belajar sambil magang. Video rekaman kelas bisa diputar ulang kapan saja sangat memudahkan.',
    rating: 5,
  },
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Strategi Menjawab Soal Farmakoterapi UKOM',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%2315527a"/%3E%3Cpath d="M130 90l60-35v70z" fill="%23ffffff"/%3E%3C/svg%3E',
    duration: '12:34',
  },
  {
    id: 'video-2',
    title: 'Ringkasan Farmakologi Klinik untuk UKOM',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%2315527a"/%3E%3Cpath d="M130 90l60-35v70z" fill="%23ffffff"/%3E%3C/svg%3E',
    duration: '18:20',
  },
  {
    id: 'video-3',
    title: 'Tips Manajemen Waktu saat Ujian CBT',
    thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%2315527a"/%3E%3Cpath d="M130 90l60-35v70z" fill="%23ffffff"/%3E%3C/svg%3E',
    duration: '09:15',
  },
];

export const MODUL_ITEMS: ModulItem[] = [
  {
    id: 'modul-1',
    title: 'Kisi-Kisi UKOM Apoteker 2025',
    category: 'Panduan Ujian',
    updatedAt: 'Juni 2025',
    format: 'PDF',
  },
  {
    id: 'modul-2',
    title: 'Ringkasan Farmakoterapi Komprehensif',
    category: 'Farmakologi',
    updatedAt: 'Mei 2025',
    format: 'Digital',
  },
  {
    id: 'modul-3',
    title: 'Soal Latihan Farmasi Komunitas & Klinik',
    category: 'Bank Soal',
    updatedAt: 'Juni 2025',
    format: 'PDF',
  },
  {
    id: 'modul-4',
    title: 'Catatan Regulasi Kefarmasian Indonesia',
    category: 'Regulasi',
    updatedAt: 'April 2025',
    format: 'Digital',
  },
];
