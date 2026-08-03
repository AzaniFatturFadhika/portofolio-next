# 00 — Master Context

## Project Identity

**Nama Produk:** Website Portfolio  
**Target Persona:** Junior Software Engineer  
**Status PRD:** Draft  
**Versi PRD:** 1.0.0  
**Penulis:** Fadhika  
**Target Launch:** Setelah seluruh MVP selesai, diuji, dan deploy ke Vercel.

---

## Product Vision

Membangun website portfolio personal yang berfungsi sebagai representasi profesional Junior Software Engineer di dunia digital.

Website harus membantu pengunjung memahami:

1. Siapa developer ini.
2. Skill teknis apa yang dimiliki.
3. Project apa saja yang pernah dibuat.
4. Bagaimana kualitas pemikiran teknisnya melalui blog.
5. Bagaimana cara menghubungi developer.
6. Di mana melihat CV, GitHub, LinkedIn, dan live demo.

---

## Main Users

### 1. Rekruter IT

Kebutuhan:

- Melihat profil singkat dengan cepat.
- Melihat skill summary.
- Mengunduh CV.
- Menghubungi kandidat.

### 2. Hiring Manager

Kebutuhan:

- Melihat detail teknis proyek.
- Mengevaluasi stack teknologi.
- Membuka GitHub repository.
- Menilai kualitas kode dan keputusan teknis.

### 3. Klien Freelance

Kebutuhan:

- Melihat contoh kerja nyata.
- Menghubungi developer.
- Memahami layanan atau kemampuan yang ditawarkan.

### 4. Sesama Developer

Kebutuhan:

- Membaca artikel teknis.
- Melihat GitHub.
- Menjalin networking atau kolaborasi.

---

## Main Features

1. Hero / Landing
2. About
3. Skills
4. Projects
5. Experience
6. Blog / Artikel
7. Contact
8. Responsive Layout
9. Dark Mode
10. CV Download

---

## Functional Requirements

### Navigation

- Sticky navbar.
- Smooth scroll ke setiap section.
- Hamburger menu untuk mobile.
- Breadcrumb untuk blog dan project detail.
- Footer dengan sitemap dan ikon sosial media.

### Hero

- Nama.
- Jabatan: Junior Software Engineer.
- Tagline.
- Typing animation untuk role.
- CTA: `Lihat Proyek Saya`.
- CTA: `Hubungi Saya`.
- Tombol download CV PDF.
- Foto profil profesional dengan border animation.

### Skills

Kategori:

1. Frontend
2. Backend
3. Database
4. DevOps
5. Tools

Tampilan:

- Badge atau progress bar.
- Ikon teknologi.
- Level kemahiran secukupnya, tidak berlebihan.

### Projects

Setiap project minimal memiliki:

- Thumbnail.
- Judul.
- Deskripsi singkat.
- Tag teknologi.
- Kategori.
- Link GitHub.
- Link live demo.
- Detail project atau modal.
- Screenshot / GIF preview.

Filter project:

- Web
- Mobile
- API
- Other

### Contact

Field:

- Nama
- Email
- Subjek
- Pesan

Behavior:

- Validasi required field.
- Validasi format email.
- Integrasi EmailJS atau Formspree.
- Notifikasi sukses.
- Notifikasi gagal.
- Proteksi spam dengan honeypot atau reCAPTCHA.

---

## Non-Functional Requirements

### Performance

Target:

- Lighthouse Performance Score >= 90.
- FCP < 1.5 detik.
- LCP < 2.5 detik.
- Total ukuran halaman < 2 MB.

### Accessibility

Target:

- Lighthouse Accessibility Score >= 90.
- Mendukung keyboard navigation.
- Kontras teks cukup.
- Label form jelas.
- Semantic HTML.

### SEO

Wajib:

- Meta title.
- Meta description.
- Open Graph tags.
- Sitemap XML.
- robots.txt.
- JSON-LD Person schema.

### Security

Wajib:

- HTTPS.
- Proteksi spam form.
- Security headers:
  - CSP
  - X-Frame-Options
  - HSTS

### Compatibility

Browser:

- Chrome
- Firefox
- Safari
- Edge

Device:

- Desktop >= 1280px
- Tablet 768px–1279px
- Mobile 320px–767px

---

## Design Direction

Prinsip:

- Clean.
- Minimalis.
- Profesional.
- Konsisten.
- Mudah dibaca.
- Tidak terlalu ramai.
- Micro-animation secukupnya.

Visual:

| Elemen | Nilai |
|---|---|
| Primary | `#1E3A5F` |
| Secondary | `#2E75B6` |
| Accent | `#F0A500` |
| Light Background | `#F4F6F9` |
| Dark Background | `#0D1117` |
| Heading Font | Inter / Poppins |
| Body Font | Inter / Roboto |
| Border Radius | 8px–16px |
| Spacing | 8px grid system |

---

## Definition of Done

Project dianggap selesai jika:

1. Semua user story prioritas tinggi selesai.
2. Lighthouse semua kategori minimal >= 85.
3. Website responsif di 5 breakpoint.
4. Form kontak berhasil mengirim email.
5. Tidak ada broken link.
6. Tidak ada gambar gagal dimuat.
7. Source code tersedia di GitHub publik.
8. Website live di domain custom dengan HTTPS.
