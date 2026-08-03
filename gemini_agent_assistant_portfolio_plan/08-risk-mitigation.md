# 08 — Risk Mitigation

Dokumen ini berisi risiko utama dan strategi mitigasi untuk project portfolio.

---

## Risk 1 — Konten Project Tidak Cukup

### Dampak

Tinggi.

Website portfolio terlihat kosong dan kurang meyakinkan untuk rekruter atau hiring manager.

### Mitigasi

- Siapkan minimal 2–3 project berkualitas.
- Project boleh berupa project dummy, tetapi harus realistis dan bisa dijelaskan.
- Setiap project harus punya:
  - Problem statement.
  - Tech stack.
  - Fitur utama.
  - Screenshot.
  - GitHub repository.
  - Live demo jika memungkinkan.
- Tulis deskripsi teknis dengan jujur.

### Agent Responsible

- Content & Portfolio Agent
- PRD Guardian Agent

---

## Risk 2 — Performa Buruk Akibat Animasi

### Dampak

Sedang.

Website bisa terasa lambat, terutama di mobile atau device low-end.

### Mitigasi

- Gunakan animasi ringan.
- Hindari animasi berulang yang berat.
- Gunakan Framer Motion hanya pada bagian penting.
- Gunakan lazy loading.
- Optimasi image.
- Test Lighthouse.
- Cek di mobile viewport.

### Agent Responsible

- UI/UX Designer Agent
- Frontend Engineer Agent
- Performance Agent

---

## Risk 3 — Form Kontak Tidak Berfungsi

### Dampak

Sedang.

Rekruter atau klien gagal menghubungi developer.

### Mitigasi

- Gunakan EmailJS atau Formspree.
- Test submit form di production.
- Tambahkan success dan error state.
- Tambahkan honeypot.
- Siapkan fallback contact link:
  - Email langsung.
  - LinkedIn.
  - GitHub.
- Monitor email secara berkala.

### Agent Responsible

- Contact & Integration Agent
- QA Agent

---

## Risk 4 — Desain Terlihat Generik

### Dampak

Rendah sampai sedang.

Portfolio kurang memorable dan terlihat seperti template umum.

### Mitigasi

- Tambahkan personal branding.
- Gunakan copywriting yang spesifik.
- Tampilkan project yang relevan.
- Gunakan visual yang konsisten.
- Hindari komponen terlalu default.
- Buat hero section lebih personal.

### Agent Responsible

- UI/UX Designer Agent
- Content & Portfolio Agent

---

## Risk 5 — Domain Expired

### Dampak

Rendah.

Website tidak bisa diakses melalui domain custom.

### Mitigasi

- Aktifkan auto-renew.
- Catat tanggal expired domain.
- Buat reminder tahunan.
- Pastikan Vercel domain fallback tetap aktif.

### Agent Responsible

- QA Agent
- Launch Agent

---

## Risk 6 — Scope Creep

### Dampak

Tinggi.

Project menjadi terlalu besar dan tidak selesai.

### Mitigasi

- Ikuti PRD.
- Dahulukan fitur prioritas tinggi.
- Simpan fitur tambahan sebagai future improvement.
- Jangan menambahkan dashboard admin, CMS kompleks, auth, atau database jika belum diperlukan.
- Gunakan data statis dulu untuk MVP.

### Agent Responsible

- PRD Guardian Agent

---

## Risk 7 — Klaim Skill Berlebihan

### Dampak

Sedang.

Dapat menurunkan kredibilitas saat interview.

### Mitigasi

- Gunakan bahasa realistis.
- Hindari klaim seperti "expert" jika belum terbukti.
- Gunakan project sebagai bukti skill.
- Tulis kontribusi secara spesifik.
- Sertakan GitHub link.

### Agent Responsible

- Content & Portfolio Agent
- PRD Guardian Agent

---

## Risk 8 — SEO Tidak Optimal

### Dampak

Sedang.

Website sulit ditemukan atau preview link terlihat buruk.

### Mitigasi

- Tambahkan metadata.
- Tambahkan Open Graph.
- Tambahkan sitemap.
- Tambahkan robots.txt.
- Tambahkan JSON-LD Person schema.
- Gunakan title dan description yang jelas.

### Agent Responsible

- Performance, SEO & Accessibility Agent

---

## Risk 9 — Mobile Layout Buruk

### Dampak

Tinggi.

Banyak rekruter membuka link dari smartphone.

### Mitigasi

- Gunakan mobile-first CSS.
- Test di beberapa viewport.
- Buat navbar mobile.
- Pastikan CTA mudah diklik.
- Pastikan project card mudah dibaca.
- Hindari horizontal scroll.

### Agent Responsible

- UI/UX Designer Agent
- Frontend Engineer Agent
- QA Agent
