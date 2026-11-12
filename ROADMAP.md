# Roadmap tour-leader-journal

## Fase 1 - Konten real dan struktur
- [ ] Ganti placeholder dengan data real 5-8 destinasi, foto WebP di src/assets
- [ ] Perbaiki README: hapus boilerplate, tulis cara run + struktur src
- [ ] Ekstrak data tur ke src/lib/tours.ts agar tambah destinasi tanpa edit JSX
- [ ] Tambah lint ke CI + npm run build hijau
- [ ] Audit audio: pastikan file ada, toggle tidak error saat hilang

## Fase 2 - Mobile UX dan SEO
- [ ] Uji 360/390/768/1280: BookContainer tidak overflow, tombol min 44px
- [ ] Lengkapi index.html: OG image, canonical, favicon, robots + sitemap
- [ ] Tombol CTA WA per paket tur dengan teks prefill per destinasi
- [ ] Lazy-load foto 3D + target LCP di bawah 2.5 detik di HP 4G

## Fase 3 - Deploy rilis v1
- [ ] Deploy statis: build ke dist, set domain
- [ ] GitHub Actions: install, lint, build per push ke main
- [ ] Kunci versi package.json, hapus dep tak terpakai, audit bersih
- [ ] Serah terima: panduan edit konten untuk non-dev

## Fase 4 - Lanjutan
- [ ] Galeri foto + testimoni jamaah
- [ ] Form kontak/jadwal tur
- [ ] Analytics ringan + checklist PDF SurvivalKit
