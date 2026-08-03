# 03 — Task Breakdown

Dokumen ini berisi urutan task yang bisa diberikan ke Gemini secara bertahap.

---

## Task 1 — Analyze PRD

### Instruction

Analisis PRD dan ubah menjadi:

1. Sitemap
2. Feature list
3. MVP priority list
4. User story mapping
5. Technical requirement list

### Acceptance Criteria

- Semua fitur utama dari PRD terdaftar.
- Prioritas tinggi ditandai.
- Tidak ada fitur tambahan di luar PRD.
- Output mudah dipakai untuk development.

---

## Task 2 — Setup Project

### Instruction

Buat project Next.js dengan TypeScript dan Tailwind CSS.

### Acceptance Criteria

- Project bisa dijalankan lokal.
- TypeScript aktif.
- Tailwind aktif.
- Folder `src/` digunakan.
- ESLint dan Prettier tersedia.

---

## Task 3 — Create Base Layout

### Instruction

Buat layout utama aplikasi.

### Scope

- `app/layout.tsx`
- `app/page.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/layout/ThemeToggle.tsx`

### Acceptance Criteria

- Navbar tampil.
- Footer tampil.
- Layout responsive.
- Dark mode foundation tersedia.
- Smooth scroll aktif.

---

## Task 4 — Build Hero Section

### Instruction

Buat Hero section sesuai PRD.

### Requirements

- Nama.
- Jabatan Junior Software Engineer.
- Tagline.
- CTA `Lihat Proyek Saya`.
- CTA `Hubungi Saya`.
- Download CV.
- Foto profil.
- Animasi ringan.

### Acceptance Criteria

- Hero mudah dipahami dalam 5 detik.
- CTA terlihat jelas.
- Tombol CV dapat diklik.
- Mobile view rapi.

---

## Task 5 — Build About Section

### Instruction

Buat About section yang menjelaskan profil profesional secara singkat.

### Acceptance Criteria

- Bio tidak terlalu panjang.
- Tone profesional.
- Ada highlight value personal.
- Tidak ada klaim berlebihan.

---

## Task 6 — Build Skills Section

### Instruction

Buat Skills section berdasarkan kategori.

### Categories

1. Frontend
2. Backend
3. Database
4. DevOps
5. Tools

### Acceptance Criteria

- Skill tampil berdasarkan kategori.
- Setiap skill memiliki badge/icon.
- Tampilan rapi di mobile.
- Tidak menggunakan level skill yang menyesatkan.

---

## Task 7 — Build Projects Section

### Instruction

Buat Projects section dengan card dan filter.

### Requirements

Setiap project memiliki:

- Thumbnail.
- Judul.
- Deskripsi singkat.
- Tech tags.
- Category.
- GitHub link.
- Live demo link.
- Detail page atau modal.

### Acceptance Criteria

- Semua project tampil.
- Filter project berfungsi.
- Link GitHub tersedia.
- Link live demo tersedia jika ada.
- Card responsive.

---

## Task 8 — Build Experience Section

### Instruction

Buat timeline pendidikan dan pengalaman.

### Acceptance Criteria

- Timeline mudah dibaca.
- Item memiliki periode, title, institusi/perusahaan, dan deskripsi singkat.
- Mobile view rapi.

---

## Task 9 — Build Blog System

### Instruction

Buat blog menggunakan MDX atau Contentlayer.

### Requirements

- Blog listing page.
- Blog detail page.
- Minimal 2 artikel.
- Breadcrumb.
- Metadata artikel.

### Acceptance Criteria

- Blog listing tampil.
- Detail blog bisa dibuka.
- Routing slug bekerja.
- Minimal 2 artikel tersedia.

---

## Task 10 — Build Contact Form

### Instruction

Buat form kontak dan integrasi email.

### Fields

- Nama
- Email
- Subjek
- Pesan

### Acceptance Criteria

- Required validation berjalan.
- Email validation berjalan.
- Success notification muncul.
- Error notification muncul.
- Honeypot tersedia.
- Email terkirim melalui EmailJS atau Formspree.

---

## Task 11 — Add SEO

### Instruction

Tambahkan SEO dasar.

### Scope

- Metadata.
- Open Graph.
- Twitter Card jika diperlukan.
- Sitemap.
- robots.txt.
- JSON-LD Person schema.

### Acceptance Criteria

- Title dan description tersedia.
- OG image atau OG metadata tersedia.
- Sitemap dapat diakses.
- robots.txt dapat diakses.
- JSON-LD valid.

---

## Task 12 — Optimize Performance

### Instruction

Optimasi performa website.

### Scope

- Image optimization.
- Lazy loading.
- Bundle check.
- Reduce animation cost.
- Remove unused code.

### Acceptance Criteria

- Lighthouse Performance target minimal 85, ideal 90.
- LCP < 2.5 detik.
- FCP < 1.5 detik jika memungkinkan.
- Tidak ada animasi berat.

---

## Task 13 — Accessibility QA

### Instruction

Periksa aksesibilitas.

### Acceptance Criteria

- Semua button punya accessible label.
- Form punya label.
- Navigasi bisa menggunakan keyboard.
- Focus state terlihat.
- Color contrast cukup.
- Lighthouse Accessibility minimal 85, ideal 90.

---

## Task 14 — Final QA

### Instruction

Jalankan acceptance testing final.

### Acceptance Criteria

- Hero benar.
- CV bisa diunduh.
- Project filter berfungsi.
- Contact form terkirim.
- Blog minimal 2 artikel.
- Dark mode bekerja.
- State dark mode tersimpan.
- GitHub dan LinkedIn aktif.
- Tidak ada broken link.
- Tidak ada broken image.

---

## Task 15 — Deploy

### Instruction

Deploy project ke Vercel.

### Acceptance Criteria

- Repo GitHub publik.
- Vercel deployment sukses.
- Domain custom aktif.
- HTTPS aktif.
- Analytics aktif.
- Production URL lolos smoke test.
