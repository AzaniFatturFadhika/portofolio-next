# Gemini Agent Assistant Plan — Portfolio Junior Software Engineer

**Project:** Website Portfolio Junior Software Engineer
**Source PRD:** `PRD_Portofolio_Junior_SE`
**Version:** 1.0.0
**Use Case:** Panduan kerja Gemini sebagai AI assistant untuk membantu membangun website portfolio dari tahap planning sampai deploy.

---

## Tujuan Paket Ini

Paket markdown ini dibuat untuk digunakan sebagai **agent assistance guide** di Gemini atau AI coding assistant lain.
Isi paket ini memecah peran, workflow, prompt, task, quality gate, dan checklist agar pembangunan website tetap sesuai PRD.

---

## Ringkasan Produk

Website portfolio ini ditujukan untuk menampilkan profil profesional Junior Software Engineer, kemampuan teknis, pengalaman proyek, blog teknis, CV, dan kontak profesional.

Target pengguna utama:

1. Rekruter IT
2. Hiring Manager
3. Klien Freelance
4. Sesama Developer

Fitur utama:

1. Hero / Landing
2. About
3. Skills
4. Projects
5. Experience
6. Blog / Artikel
7. Contact
8. Responsive Design
9. Dark Mode
10. CV Download

---

## Stack Utama

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX / Contentlayer
- EmailJS / Formspree
- Git + GitHub
- Vercel
- Vercel Analytics

---

## Isi File

| File                                 | Fungsi                                     |
| ------------------------------------ | ------------------------------------------ |
| `00-master-context.md`               | Konteks utama project dari PRD             |
| `01-agent-roles.md`                  | Pembagian role agent Gemini                |
| `02-workflow-plan.md`                | Alur kerja dari planning sampai launch     |
| `03-task-breakdown.md`               | Daftar task teknis bertahap                |
| `04-gemini-master-prompt.md`         | Prompt utama untuk Gemini                  |
| `05-role-prompts.md`                 | Prompt spesifik per role agent             |
| `06-project-structure.md`            | Struktur folder project Next.js            |
| `07-quality-acceptance-checklist.md` | Checklist QA, DoD, dan acceptance test     |
| `08-risk-mitigation.md`              | Risiko dan mitigasi                        |
| `09-agent-operating-rules.md`        | Aturan kerja agent agar tidak keluar scope |
| `10-backlog.md`                      | Backlog implementasi fitur                 |

---

## Cara Pakai

1. Buka Gemini.
2. Upload atau copy isi `00-master-context.md`.
3. Lanjutkan dengan `04-gemini-master-prompt.md`.
4. Jika ingin kerja per role, gunakan prompt dari `05-role-prompts.md`.
5. Jalankan task dari `03-task-breakdown.md` secara berurutan.
6. Setelah implementasi, cek hasil dengan `07-quality-acceptance-checklist.md`.

---

## Prinsip Utama

> Jangan membangun fitur di luar PRD kecuali benar-benar diperlukan untuk kualitas implementasi.

Prioritas tertinggi:

1. Hero jelas dan profesional.
2. Project showcase lengkap.
3. Tombol download CV mudah ditemukan.
4. Website responsif di mobile.
5. Contact form berfungsi.
6. GitHub dan LinkedIn mudah diakses.
7. Performa, SEO, dan aksesibilitas baik.
