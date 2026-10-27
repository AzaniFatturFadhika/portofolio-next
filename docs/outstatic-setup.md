# Panduan Integrasi & Setup Outstatic CMS

Dokumen ini menjelaskan langkah-langkah mengintegrasikan dan mengonfigurasi Outstatic sebagai content management system (CMS) untuk portfolio ini, serta cara menjaga konsistensi tema antar rute publik dan dasbor CMS.

---

## 1. Ringkasan

Outstatic digunakan sebagai dasbor pengelolaan konten artikel blog yang terintegrasi langsung dengan repositori GitHub host situs. Konten disimpan sebagai file Markdown/MDX di `outstatic/content/articles/` dan dibaca oleh situs publik melalui satu jalur akses bersama (`src/lib/cms.ts`).

Rute yang terlibat:

| Rute | Deskripsi |
|------|-----------|
| `/outstatic` | Dasbor editor terautentikasi (GitHub OAuth) |
| `/api/outstatic/[[...ost]]` | API callback & proxy Outstatic |
| `/blog` | Daftar artikel publik |
| `/blog/[slug]` | Halaman detail artikel |
| `/` | Section tulisan terbaru (mengambil dari konten yang sama) |

---

## 2. Prasyarat

Pastikan dependensi berikut terpasang (sudah tercantum di `package.json`):

* `outstatic@^2.2.4`
* `next-themes@^0.4.6`
* `tailwindcss@^4.1.10` (dipin untuk kompatibilitas peer Outstatic)

Jalankan:

```bash
pnpm install
```

---

## 3. Variabel Lingkungan

Salin `.env.example` menjadi `.env` dan isi kredensial OAuth GitHub:

```bash
cp .env.example .env
```

```env
# Base URL untuk metadata SEO & sitemap
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app

# Formspree Form ID untuk kontak form (opsional untuk pengujian lokal)
NEXT_PUBLIC_FORMSPREE_KEY=your_formspree_form_id

# Outstatic CMS — GitHub OAuth app credentials untuk dasbor /outstatic.
# Buat OAuth app di https://github.com/settings/developers dan set
# callback URL menjadi <situs-anda>/api/outstatic/callback
OST_GITHUB_ID=your_github_oauth_app_id
OST_GITHUB_SECRET=your_github_oauth_app_secret

# Repository slug (contoh: untuk owner/repo, OST_REPO_SLUG=repo).
# Di Vercel ini bernilai VERCEL_GIT_REPO_SLUG saat kosong.
OST_REPO_SLUG=portofolio-next

# Repository owner. Bernilai username GitHub yang login saat kosong.
OST_REPO_OWNER=AzaniFatturFadhika

# Cabang utama repository. Bernilai 'main' saat kosong.
OST_REPO_BRANCH=main
```

**Penting:** Jangan mencomot file `.env` ke repositori. Tambahkan ke `.gitignore`.

---

## 4. Struktur Direktori Konten

```txt
outstatic/
  content/
    articles/
      mengapa-typescript-terbaik-untuk-nextjs.mdx
      optimasi-performa-nextjs-app-router.mdx
      panduan-praktis-react-server-actions.mdx
```

Setiap artikel adalah file MDX dengan frontmatter di bagian atas.

---

## 5. Format Frontmatter Artikel

Contoh file artikel:

```mdx
---
title: "Judul Artikel"
excerpt: "Ringkasan singkat artikel ini."
publishedAt: "2026-06-01"
readTime: "5 min read"
category: "TypeScript"
status: "published"
slug: "mengapa-typescript-terbaik-untuk-nextjs"
---

Isi artikel dalam Markdown/MDX di sini...
```

| Field | Wajib | Deskripsi |
|-------|-------|-----------|
| `title` | Ya | Judul artikel |
| `excerpt` | Ya | Ringkasan untuk daftar & SEO |
| `publishedAt` | Ya | Tanggal publikasi (`YYYY-MM-DD`) |
| `readTime` | Ya | Estimasi waktu baca |
| `category` | Ya | Kategori artikel |
| `status` | Ya | `published` atau `draft` |
| `slug` | Ya | Alamat unik (URL-friendly) |

Hanya artikel dengan `status: "published"` yang tampil di daftar, sitemap, dan halaman detail. Draft tidak diakses oleh publik.

---

## 6. Konfigurasi Rute CMS

### 6.1 Halaman CMS

`src/app/(cms)/outstatic/[[...ost]]/page.tsx` memuat CSS Outstatic dan merender `OstClient`:

```tsx
import "outstatic/outstatic.css";
import { Outstatic } from "outstatic";
import { OstClient } from "outstatic/client";

export const dynamic = "force-dynamic";

interface OutstaticPageProps {
  params: Promise<{ ost?: string[] }>;
}

export default async function OutstaticPage({ params }: OutstaticPageProps) {
  const resolvedParams = await params;
  const ostData = await Outstatic();

  return (
    <OstClient ostData={ostData} params={{ ost: resolvedParams.ost ?? [] }} />
  );
}
```

### 6.2 Layout CMS

`src/app/(cms)/layout.tsx` membungkus konten CMS di `<div id="outstatic">` agar gaya CMS tidak bocor ke situs publik:

```tsx
export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return <div id="outstatic">{children}</div>;
}
```

---

## 7. Akses Konten dari Situs Publik

Semua permintaan artikel publik melalui satu jalur di `src/lib/cms.ts`:

* `getArticles()` — daftar ringkasan artikel yang dipublikasikan, terbaru dulu.
* `getArticleBySlug(slug)` — detail satu artikel berdasarkan slug.
* `getArticleSlugs()` — semua slug artikel yang dipublikasikan (digunakan `generateStaticParams` untuk SSG).

Konten dibaca dari `outstatic/content/articles/` pada waktu build, bukan runtime, sehingga halaman artikel statis dan cepat.

---

## 8. Build & Deploy (SSG)

Halaman artikel di-pre-render sebagai konten statis saat `next build` menggunakan `generateStaticParams()` di `src/app/blog/[slug]/page.tsx`. Tidak perlu render ulang di waktu permintaan.

```bash
pnpm build
pnpm start
```

Di Vercel, variabel `OST_*` diatur melalui pengaturan proyek (Environment Variables) dan tidak disimpan di repositori. Dasbor `/outstatic` dan API-nya dinonindeks oleh mesin pencari melalui `robots.txt`.

---

## 9. Setup OAuth GitHub

1. Buka https://github.com/settings/developers.
2. Buat **New OAuth App**.
3. Isi:
   * **Homepage URL:** `https://your-domain.vercel.app`
   * **Authorization callback URL:** `https://your-domain.vercel.app/api/outstatic/callback`
4. Salin **Client ID** ke `OST_GITHUB_ID` dan **Client Secret** ke `OST_GITHUB_SECRET`.
5. Masuk ke dasbor `/outstatic` danAuthorize dengan GitHub. Hanya pemilik repository yang dapat mengakses dasbor.

---

## 10. Pemeliharaan Tema (CSS Conflict Fix)

Outstatic menyertakan `outstatic.css` yang menentukan variabel tema **global** pada `:root` dan `.dark` (mis. `--background: oklch(1 0 0)` putih), yang tidak di-bawahi oleh `#outstatic`. Karena stylesheet bersifat global dan bertahan di seluruh navigasi sisi klien, variabel CMS bisa menimpa variabel tema portfolio (`--background: #f7f9f3` di `src/app/globals.css`) saat kembali ke `/` dari CMS.

Perbaikan yang telah diterapkan:

### 10.1 `src/app/globals.css`

Variabel tema portfolio diwakili di bawah `html[data-theme="portfolio"]` dan `html[data-theme="portfolio"].dark` agar spesifisitas lebih tinggi dibandingkan `:root` / `.dark` milik Outstatic:

```css
html[data-theme="portfolio"] {
  --background: #f7f9f3;
  ...
}

html[data-theme="portfolio"].dark {
  --background: #000000;
  ...
}
```

### 10.2 `src/app/layout.tsx`

Atribut `data-theme="portfolio"` ditetapkan secara statis pada `<html>` (SSR, tidak ada flash saat muat `/`):

```tsx
<html
  lang="en"
  className="..."
  data-theme="portfolio"
  suppressHydrationWarning
>
```

### 10.3 `src/components/layout/ThemeSync.tsx`

Saat di luar rute CMS, atribut `data-theme="portfolio"` dipertahankan dan kelas `dark` / `colorScheme` di-sinkronkan. Saat berada di `/outstatic`, atribut dihapus sehingga Outstatic mengelola `:root` sendiri:

```tsx
if (isCms) {
  delete root.dataset.theme;
} else {
  root.dataset.theme = "portfolio";
  // sinkronkan localStorage "theme" agar Outstatic mulai dari nilai yang sama
}
```

Dengan demikian tema portfolio tetap utuh saat navigasi kembali ke `/`, sementara CMS di `/outstatic` terus menggunakan tema Outstatic.

---

## 11. Troubleshooting

| Masalah | Penyebab kemungkinan | Solusi |
|---------|---------------------|--------|
| Tema portfolio berubah warna setelah kembali dari `/outstatic` | Variabel CSS global Outstatic menimpa `:root` portfolio | Pastikan `data-theme="portfolio"` ada pada `<html>` dan `ThemeSync` aktif (lihat bagian 10) |
| Artikel tidak muncul di daftar | `status` bukan `published` | Ubah frontmatter menjadi `status: "published"` |
| Halaman artikel 404 setelah build | Slug tidak cocok atau `generateStaticParams` tidak menangkap slug | Pastikan slug unik dan cocok dengan nama file |
| Dasbor `/outstatic` gagal login | `OST_GITHUB_ID` / `OST_GITHUB_SECRET` salah atau callback URL tidak cocok | Periksa variabel env dan callback URL di pengaturan OAuth GitHub |
| Build gagal saat folder `outstatic/content/articles` belum ada | Folder konten belum diinisialisasi | Buat folder `outstatic/content/articles/` atau tambahkan setidaknya satu artikel MDX |

---

## 12. Referensi

* Outstatic dokumentasi resmi: https://outstatic.com/docs
* `src/lib/cms.ts` — jalur akses konten bersama
* `docs/architecture.md` — arsitektur proyek & pemisahan data
* `docs/features.md` — detail fitur sistem blog dinamis
* `specs/001-outstatic-cms/` — spesifikasi fitur Outstatic
