# 10 — Backlog

Backlog implementasi berdasarkan PRD.

---

## Epic 1 — Foundation

### [DONE] BL-001 — Setup Next.js Project

**As a developer, I want a clean Next.js project setup so that development can start with a stable foundation.**

Acceptance Criteria:

- Project menggunakan Next.js.
- TypeScript aktif.
- Tailwind CSS aktif.
- ESLint aktif.
- Project bisa dijalankan lokal.

Priority: High

---

### [DONE] BL-002 — Create Base Layout

**As a visitor, I want a consistent layout so that the website feels professional.**

Acceptance Criteria:

- Layout global tersedia.
- Navbar tampil di semua halaman.
- Footer tampil di semua halaman.
- Font global aktif.
- Theme color sesuai PRD.

Priority: High

---

### [DONE] BL-003 — Implement Dark Mode Foundation

**As a visitor, I want to switch to dark mode so that I can browse comfortably at night.**

Acceptance Criteria:

- Dark mode toggle tersedia.
- State tersimpan di localStorage.
- Tidak ada teks yang sulit dibaca.
- Mode tetap aktif setelah refresh.

Priority: Low

---

## Epic 2 — Navigation

### [DONE] BL-004 — Sticky Navbar

**As a visitor, I want a sticky navbar so that I can navigate easily.**

Acceptance Criteria:

- Navbar sticky.
- Smooth scroll aktif.
- Link mengarah ke section yang benar.
- Navbar tidak menutupi konten penting.

Priority: High

---

### [DONE] BL-005 — Mobile Hamburger Menu

**As a mobile user, I want a hamburger menu so that navigation is usable on small screens.**

Acceptance Criteria:

- Hamburger muncul di mobile.
- Menu bisa dibuka dan ditutup.
- Klik link menutup menu.
- Keyboard accessible.

Priority: High

---

## Epic 3 — Hero

### [DONE] BL-006 — Hero Profile Summary

**As a recruiter, I want to see a profile summary on the homepage so that I can quickly assess the candidate.**

Acceptance Criteria:

- Nama tampil.
- Role tampil.
- Tagline tampil.
- Profil mudah dipahami.
- Mobile responsive.

Priority: High

---

### [DONE] BL-007 — Hero CTA Buttons

**As a visitor, I want clear CTA buttons so that I know what action to take next.**

Acceptance Criteria:

- Tombol `Lihat Proyek Saya` tampil.
- Tombol `Hubungi Saya` tampil.
- Tombol mengarah ke section benar.
- Styling CTA jelas.

Priority: High

---

### [DONE] BL-008 — CV Download Button

**As a recruiter, I want to download the CV easily so that screening is more efficient.**

Acceptance Criteria:

- Tombol CV terlihat.
- File CV PDF tersedia.
- Klik tombol mengunduh/membuka CV.
- Tidak ada broken file.

Priority: High

---

## Epic 4 — Profile Content

### [DONE] BL-009 — About Section

**As a visitor, I want to read a short professional bio so that I understand the developer's background.**

Acceptance Criteria:

- Bio tampil.
- Bahasa profesional.
- Tidak terlalu panjang.
- Tidak berlebihan.

Priority: Medium

---

### [DONE] BL-010 — Experience Timeline

**As a hiring manager, I want to see education and experience timeline so that I understand the candidate's background.**

Acceptance Criteria:

- Timeline tampil.
- Periode jelas.
- Title jelas.
- Deskripsi singkat.
- Mobile responsive.

Priority: Medium

---

## Epic 5 — Skills

### [DONE] BL-011 — Skills by Category

**As a hiring manager, I want to see skills by category so that I can evaluate technical fit.**

Acceptance Criteria:

- Frontend category tersedia.
- Backend category tersedia.
- Database category tersedia.
- DevOps category tersedia.
- Tools category tersedia.
- Tampilan rapi.

Priority: High

---

## Epic 6 — Projects

### [DONE] BL-012 — Project Cards

**As a hiring manager, I want to see project cards so that I can evaluate technical experience.**

Acceptance Criteria:

- Project card tampil.
- Thumbnail tampil.
- Judul tampil.
- Deskripsi tampil.
- Tech tags tampil.
- Link GitHub tampil.
- Link live demo tampil jika ada.

Priority: High

---

### [DONE] BL-013 — Project Filter

**As a visitor, I want to filter projects by category so that I can find relevant projects quickly.**

Acceptance Criteria:

- Filter kategori tampil.
- Klik filter mengubah daftar project.
- Filter all tersedia.
- State filter tidak merusak layout.

Priority: Medium

---

### [DONE] BL-014 — Project Detail Page or Modal

**As a hiring manager, I want to see project details so that I can understand the technical implementation.**

Acceptance Criteria:

- Detail project bisa dibuka.
- Problem statement tampil.
- Tech stack tampil.
- Key features tampil.
- GitHub link tampil.
- Live demo link tampil jika ada.

Priority: High

---

## Epic 7 — Blog

### [DONE] BL-015 — Blog Listing

**As a visitor, I want to see blog articles so that I can evaluate the developer's technical thinking.**

Acceptance Criteria:

- Blog listing tampil.
- Minimal 2 artikel.
- Judul artikel tampil.
- Excerpt tampil.
- Tanggal tampil jika ada.

Priority: Medium

---

### [DONE] BL-016 — Blog Detail

**As a visitor, I want to read a blog article so that I can understand the author's technical perspective.**

Acceptance Criteria:

- Blog detail route bekerja.
- Slug bekerja.
- Konten MDX tampil.
- Breadcrumb tampil.
- Metadata artikel tersedia.

Priority: Medium

---

## Epic 8 — Contact

### [DONE] BL-017 — Contact Form UI

**As a freelance client, I want to fill a contact form so that I can contact the developer easily.**

Acceptance Criteria:

- Field nama tersedia.
- Field email tersedia.
- Field subjek tersedia.
- Field pesan tersedia.
- Form responsive.
- Label accessible.

Priority: Medium

---

### [DONE] BL-018 — Contact Form Validation

**As a visitor, I want clear validation so that I know if my message is valid.**

Acceptance Criteria:

- Required validation bekerja.
- Email validation bekerja.
- Error message jelas.
- Tidak bisa submit data kosong.

Priority: Medium

---

### [DONE] BL-019 — Email Integration

**As a visitor, I want my contact message to be sent successfully so that the developer receives it.**

Acceptance Criteria:

- EmailJS/Formspree terintegrasi.
- Success notification muncul.
- Error notification muncul.
- Email diterima.
- Honeypot tersedia.

Priority: Medium

---

## Epic 9 — SEO, Accessibility, Performance

### [DONE] BL-020 — SEO Metadata

**As a site owner, I want SEO metadata so that the portfolio appears properly in search engines and link previews.**

Acceptance Criteria:

- Title tersedia.
- Description tersedia.
- OG tags tersedia.
- JSON-LD tersedia.
- Sitemap tersedia.
- robots.txt tersedia.

Priority: High

---

### [DONE] BL-021 — Accessibility Improvement

**As a user with accessibility needs, I want the site to be accessible so that I can browse comfortably.**

Acceptance Criteria:

- Keyboard navigation bekerja.
- Focus state terlihat.
- Form label tersedia.
- Alt text tersedia.
- Kontras cukup.

Priority: High

---

### [DONE] BL-022 — Performance Optimization

**As a visitor, I want the site to load fast so that I can browse without waiting.**

Acceptance Criteria:

- Image optimized.
- Lazy loading aktif.
- Animasi ringan.
- Lighthouse Performance minimal 85.
- Tidak ada layout shift besar.

Priority: High

---

## Epic 10 — Deploy

### BL-023 — GitHub Repository

**As a hiring manager, I want to access the source code so that I can evaluate code quality.**

Acceptance Criteria:

- Repository publik.
- README tersedia.
- Instruksi run tersedia.
- Link repository aktif.

Priority: High

---

### BL-024 — Vercel Deployment

**As a visitor, I want to access the website online so that I can view the portfolio anytime.**

Acceptance Criteria:

- Deploy sukses.
- URL production aktif.
- HTTPS aktif.
- Environment variable aman.
- Tidak ada runtime error.

Priority: High

---

### BL-025 — Analytics Setup

**As a site owner, I want analytics so that I can monitor traffic.**

Acceptance Criteria:

- Vercel Analytics aktif.
- Tidak menggunakan tracking invasif.
- Production test berhasil.

Priority: Low
