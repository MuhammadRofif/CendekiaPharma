// Fallback avatar SVG untuk gambar profil yang gagal dimuat

export const FALLBACK_AVATAR_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Cpath d='M50 45c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15 6.716 15 15 15zm0 5c-10.493 0-19 8.507-19 19v11h38V69c0-10.493-8.507-19-19-19z' fill='%239ca3af'/%3E%3C/svg%3E`;

export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  img.src = FALLBACK_AVATAR_SVG;
}
