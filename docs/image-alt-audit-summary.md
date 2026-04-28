# Audit Atribut Alt pada Gambar - CendekiaPharma Landing Page

**Task:** 12.1 Audit dan perbaiki atribut `alt` pada semua komponen yang menggunakan `<Image>` atau `<img>`

**Tanggal:** 2025-01-XX

**Status:** ✅ Selesai

---

## Ringkasan Audit

Audit menyeluruh telah dilakukan pada semua komponen yang menggunakan elemen `<Image>` dari Next.js. Berikut adalah hasil audit:

### Komponen yang Diaudit

| Komponen | Jumlah Gambar | Status Alt Text | Status onError Handler |
|----------|---------------|-----------------|------------------------|
| HeroSection | 1 | ✅ Deskriptif | N/A (ilustrasi statis) |
| KelasOnlineSection | 1 | ✅ Deskriptif | N/A (ilustrasi statis) |
| KelasTatapMukaSection | 1 | ✅ Deskriptif | N/A (ilustrasi statis) |
| MentorSection | 3+ (dinamis) | ✅ Deskriptif | ✅ Ditambahkan |
| TestimoniSection | 5+ (dinamis) | ✅ Deskriptif | ✅ Ditambahkan |
| TryoutSection | 1 | ✅ Deskriptif | N/A (ilustrasi statis) |
| VideoSection | 3+ (dinamis) | ✅ Deskriptif | N/A (thumbnail video) |
| MobileAppSection | 0 | N/A | N/A |

---

## Detail Perbaikan

### 1. Atribut Alt yang Sudah Deskriptif

Semua komponen sudah memiliki atribut `alt` yang deskriptif dan tidak kosong:

#### HeroSection
```tsx
alt="Ilustrasi mahasiswa apoteker belajar mempersiapkan UKOM bersama CendekiaPharma"
```

#### KelasOnlineSection
```tsx
alt="Ilustrasi kelas online CendekiaPharma dengan live class dan rekaman kelas yang dapat diakses dari mana saja"
```

#### KelasTatapMukaSection
```tsx
alt="Ilustrasi kelas tatap muka CendekiaPharma dengan program intensif offline dan diskusi langsung dengan mentor"
```

#### MentorSection (Diperbaiki)
**Sebelum:**
```tsx
alt={`Foto profil ${mentor.name}`}
```

**Sesudah:**
```tsx
alt={`Foto profil ${mentor.name}, mentor ${mentor.specialization}`}
```

#### TestimoniSection (Diperbaiki)
**Sebelum:**
```tsx
alt={`Foto profil ${TESTIMONI_ITEMS[activeIndex].name}`}
```

**Sesudah:**
```tsx
alt={`Foto profil ${TESTIMONI_ITEMS[activeIndex].name}, alumni ${TESTIMONI_ITEMS[activeIndex].batch}`}
```

#### TryoutSection
```tsx
alt="Ilustrasi simulasi CBT UKOM dengan timer dan analisis nilai serta ranking peserta"
```

#### VideoSection
```tsx
alt={`Thumbnail video: ${video.title}`}
```

---

### 2. Penambahan onError Handler

Untuk gambar profil mentor dan testimoni yang bersifat dinamis, telah ditambahkan `onError` handler untuk menampilkan fallback avatar SVG jika gambar gagal dimuat.

#### File Baru: `lib/fallback-avatar.ts`

```typescript
export const FALLBACK_AVATAR_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Cpath d='M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z' fill='%239ca3af'/%3E%3C/svg%3E`;

export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  img.src = FALLBACK_AVATAR_SVG;
}
```

#### Implementasi di MentorSection

```tsx
import { handleImageError } from '@/lib/fallback-avatar';

<Image
  src={mentor.photo}
  alt={`Foto profil ${mentor.name}, mentor ${mentor.specialization}`}
  fill
  className="rounded-full object-cover"
  sizes="128px"
  onError={handleImageError}
/>
```

#### Implementasi di TestimoniSection

```tsx
import { handleImageError } from '@/lib/fallback-avatar';

<Image
  src={TESTIMONI_ITEMS[activeIndex].photo}
  alt={`Foto profil ${TESTIMONI_ITEMS[activeIndex].name}, alumni ${TESTIMONI_ITEMS[activeIndex].batch}`}
  fill
  className="rounded-full object-cover"
  sizes="96px"
  onError={handleImageError}
/>
```

---

## Pengujian

### File Test Baru: `components/sections/ImageAltAudit.test.tsx`

Test suite komprehensif telah dibuat untuk memverifikasi:

1. ✅ Semua gambar memiliki atribut `alt` yang tidak kosong
2. ✅ Alt text bersifat deskriptif (mengandung informasi kontekstual)
3. ✅ Gambar profil memiliki onError handler

Test mencakup semua komponen yang menggunakan gambar:
- HeroSection
- KelasOnlineSection
- KelasTatapMukaSection
- MentorSection
- TestimoniSection
- TryoutSection
- VideoSection

---

## Kepatuhan terhadap Requirements

### Requirement 16.3: SEO dan Aksesibilitas Dasar

> THE Landing_Page SHALL menyertakan atribut alt yang deskriptif pada setiap elemen gambar.

**Status:** ✅ **TERPENUHI**

- Semua elemen `<Image>` memiliki atribut `alt` yang deskriptif
- Alt text tidak kosong dan memberikan konteks yang jelas
- Gambar profil dinamis (mentor dan testimoni) memiliki fallback avatar SVG
- Alt text mencakup informasi tambahan (spesialisasi mentor, batch alumni)

---

## Checklist Implementasi

- [x] Audit semua komponen yang menggunakan `<Image>` atau `<img>`
- [x] Verifikasi semua gambar memiliki atribut `alt` yang tidak kosong
- [x] Perbaiki alt text yang kurang deskriptif (MentorSection, TestimoniSection)
- [x] Buat utility fallback avatar SVG (`lib/fallback-avatar.ts`)
- [x] Tambahkan `onError` handler pada gambar mentor
- [x] Tambahkan `onError` handler pada gambar testimoni
- [x] Buat test suite untuk verifikasi alt attributes (`ImageAltAudit.test.tsx`)
- [x] Verifikasi tidak ada error TypeScript
- [x] Dokumentasi audit dan perbaikan

---

## Kesimpulan

Audit dan perbaikan atribut `alt` pada semua komponen gambar telah selesai dilakukan. Semua gambar kini memiliki:

1. **Alt text yang deskriptif** - memberikan konteks yang jelas untuk screen reader
2. **Fallback mechanism** - gambar profil yang gagal dimuat akan menampilkan avatar placeholder
3. **Test coverage** - test suite memverifikasi kepatuhan terhadap standar aksesibilitas

Landing page CendekiaPharma kini memenuhi standar aksesibilitas dasar untuk elemen gambar sesuai dengan Requirement 16.3.
