import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CendekiaPharma — Belajar, Lulus, Jadi Apoteker Hebat',
  description:
    'Platform bimbingan belajar terpercaya untuk persiapan UKOM (Uji Kompetensi) Mahasiswa Profesi Apoteker Indonesia. Kelas online, tatap muka, tryout CBT, video, dan modul terupdate.',
  openGraph: {
    title: 'CendekiaPharma — Belajar, Lulus, Jadi Apoteker Hebat',
    description:
      'Platform bimbingan belajar terpercaya untuk persiapan UKOM Apoteker. Bergabung dengan 5.000+ peserta dengan tingkat kelulusan 92%.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CendekiaPharma — Platform Bimbingan Belajar UKOM Apoteker',
      },
    ],
    type: 'website',
    locale: 'id_ID',
    siteName: 'CendekiaPharma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CendekiaPharma — Belajar, Lulus, Jadi Apoteker Hebat',
    description:
      'Platform bimbingan belajar terpercaya untuk persiapan UKOM Apoteker.',
    images: ['/images/og-image.png'],
  },
  metadataBase: new URL('https://cendekiapharma.id'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
