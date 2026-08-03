# 09 — Agent Operating Rules

Dokumen ini berisi aturan kerja agar Gemini tidak keluar dari scope PRD.

---

## Core Rules

1. PRD adalah sumber utama kebenaran.
2. Jangan menambahkan fitur di luar PRD tanpa alasan kuat.
3. Prioritaskan user story dengan prioritas tinggi.
4. Bangun MVP terlebih dahulu.
5. Jangan membuat arsitektur terlalu kompleks.
6. Jangan membuat backend/database jika data statis cukup.
7. Jangan menggunakan animasi berlebihan.
8. Jangan mengorbankan performa untuk visual.
9. Jangan membuat klaim skill yang tidak terbukti.
10. Jangan deploy sebelum QA selesai.

---

## Before Coding Rule

Sebelum menulis kode, Gemini wajib menjelaskan:

1. Requirement PRD yang didukung.
2. User story yang didukung.
3. File yang akan dibuat/diubah.
4. Langkah implementasi.
5. Acceptance criteria.

Format:

```md
## Implementation Plan

### PRD Requirement
...

### User Story
...

### Files to Create/Edit
...

### Steps
...

### Acceptance Criteria
...
```

---

## After Coding Rule

Setelah menulis kode, Gemini wajib memberikan:

1. Ringkasan perubahan.
2. Cara menjalankan.
3. Cara menguji.
4. Checklist acceptance.
5. Risiko atau TODO jika ada.

Format:

```md
## Implementation Summary

### Changed Files
...

### How to Run
...

### How to Test
...

### Acceptance Checklist
- [ ] ...

### Notes / TODO
...
```

---

## Scope Control

### Allowed for MVP

- Static portfolio data.
- Static project data.
- MDX blog.
- Contact form with EmailJS/Formspree.
- Dark mode.
- SEO.
- Responsive design.
- Vercel deployment.

### Not Allowed for MVP

Kecuali diminta secara eksplisit, jangan membuat:

- Admin dashboard.
- Login/authentication.
- Database.
- CMS kompleks.
- Payment.
- Multi-language.
- AI chatbot.
- Comment system.
- User account.
- Complex analytics dashboard.

---

## Code Quality Rules

1. Gunakan TypeScript.
2. Hindari `any` jika tidak perlu.
3. Gunakan reusable component.
4. Pisahkan data dari UI.
5. Gunakan semantic HTML.
6. Gunakan Tailwind secara konsisten.
7. Gunakan naming yang jelas.
8. Jangan hardcode link sensitif.
9. Gunakan `.env.example`.
10. Dokumentasikan setup.

---

## UI Rules

1. Gunakan desain clean dan minimalis.
2. CTA harus jelas.
3. Hero harus langsung menjelaskan profil.
4. Project section harus mudah discan.
5. Mobile layout harus prioritas.
6. Dark mode harus punya kontras baik.
7. Hover effect secukupnya.
8. Jangan pakai animasi yang mengganggu.

---

## Content Rules

1. Gunakan tone profesional.
2. Hindari klaim berlebihan.
3. Jelaskan project dengan problem-solution-impact.
4. Tulis skill berdasarkan bukti project.
5. Blog harus menunjukkan kemampuan berpikir teknis.
6. CTA harus mengarahkan ke contact, GitHub, LinkedIn, atau CV.

---

## QA Rules

Sebelum launch:

1. Test semua link.
2. Test CV download.
3. Test contact form.
4. Test mobile.
5. Test dark mode.
6. Test blog route.
7. Test Lighthouse.
8. Test no broken images.
9. Test production URL.
10. Test accessibility dasar.
