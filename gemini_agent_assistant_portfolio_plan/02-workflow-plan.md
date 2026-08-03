# 02 — Workflow Plan

Dokumen ini menjelaskan alur kerja Gemini Agent Assistant dari awal sampai launch.

---

## Phase 1 — Planning & Design

### Goal

Mengubah PRD menjadi rencana implementasi yang jelas.

### Active Agents

- PRD Guardian Agent
- UI/UX Designer Agent
- Content & Portfolio Agent

### Tasks

1. Review PRD.
2. Buat sitemap.
3. Buat MVP priority list.
4. Buat daftar section.
5. Buat wireframe kasar.
6. Tentukan content inventory.
7. Tentukan design system awal.

### Deliverables

- Sitemap.
- MVP scope.
- Feature list.
- Section list.
- Content checklist.
- Wireframe plan.
- Design token awal.

### Exit Criteria

Phase ini selesai jika:

- Semua fitur MVP sudah jelas.
- Struktur halaman sudah jelas.
- Konten yang dibutuhkan sudah terdaftar.
- Design direction sudah sesuai PRD.

---

## Phase 2 — Setup & Foundation

### Goal

Menyiapkan fondasi teknis project.

### Active Agents

- Frontend Engineer Agent
- PRD Guardian Agent

### Tasks

1. Setup Next.js + TypeScript.
2. Setup Tailwind CSS.
3. Setup ESLint dan Prettier.
4. Setup struktur folder.
5. Setup layout global.
6. Setup font.
7. Setup theme token.
8. Setup dark mode provider.

### Deliverables

- Project Next.js berjalan.
- Tailwind aktif.
- Struktur folder tersedia.
- Layout global tersedia.
- Dark mode foundation tersedia.

### Exit Criteria

Phase ini selesai jika project bisa dijalankan lokal dan struktur dasar sudah siap.

---

## Phase 3 — Core Development

### Goal

Membangun semua section utama.

### Active Agents

- Frontend Engineer Agent
- UI/UX Designer Agent
- Content & Portfolio Agent

### Tasks

1. Build Navbar.
2. Build Hero.
3. Build About.
4. Build Skills.
5. Build Projects.
6. Build Experience.
7. Build Blog preview.
8. Build Contact.
9. Build Footer.
10. Build responsive layout.

### Deliverables

- Semua section utama tampil.
- Navigasi berjalan.
- Layout responsive.
- Dark mode berjalan.
- Data dummy sudah terhubung.

### Exit Criteria

Phase ini selesai jika semua section utama sudah dapat dilihat dan digunakan.

---

## Phase 4 — Content & Integration

### Goal

Mengisi konten final dan mengaktifkan integrasi.

### Active Agents

- Content & Portfolio Agent
- Contact & Integration Agent
- Frontend Engineer Agent

### Tasks

1. Isi data project.
2. Isi skill list.
3. Isi experience.
4. Tambahkan minimal 2 artikel blog.
5. Tambahkan CV PDF.
6. Tambahkan GitHub link.
7. Tambahkan LinkedIn link.
8. Integrasi EmailJS / Formspree.
9. Validasi form kontak.
10. Tambahkan notifikasi sukses/gagal.

### Deliverables

- Konten portfolio final.
- Blog minimal 2 artikel.
- CV bisa diunduh.
- Form kontak aktif.
- Link eksternal aktif.

### Exit Criteria

Phase ini selesai jika semua konten penting sudah tersedia dan form kontak berhasil diuji.

---

## Phase 5 — Optimization

### Goal

Mengoptimalkan kualitas website.

### Active Agents

- Performance, SEO & Accessibility Agent
- QA & Acceptance Testing Agent

### Tasks

1. Optimasi image.
2. Cek ukuran bundle.
3. Cek animasi.
4. Tambahkan SEO metadata.
5. Tambahkan Open Graph.
6. Tambahkan JSON-LD Person schema.
7. Tambahkan sitemap.
8. Tambahkan robots.txt.
9. Test keyboard navigation.
10. Test color contrast.
11. Tambahkan security headers.
12. Jalankan Lighthouse.

### Deliverables

- SEO lengkap.
- Accessibility baik.
- Performance baik.
- Security header dasar.
- QA report awal.

### Exit Criteria

Phase ini selesai jika Lighthouse minimal sesuai DoD dan bug mayor selesai.

---

## Phase 6 — Launch & Monitoring

### Goal

Mempublikasikan website.

### Active Agents

- Frontend Engineer Agent
- Performance, SEO & Accessibility Agent
- QA & Acceptance Testing Agent

### Tasks

1. Push ke GitHub.
2. Deploy ke Vercel.
3. Setup environment variable.
4. Setup custom domain.
5. Pastikan HTTPS aktif.
6. Aktifkan Vercel Analytics.
7. Test production URL.
8. Final acceptance test.

### Deliverables

- Repository GitHub publik.
- Website live di Vercel.
- Domain custom aktif.
- HTTPS aktif.
- Analytics aktif.
- Final QA checklist.

### Exit Criteria

Project selesai jika website live, bisa diakses, dan lolos checklist penerimaan.
