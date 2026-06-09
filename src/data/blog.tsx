import React from "react";
import { BlogPost } from "@/types/blog";

// Post 1 Content Component
const MdxPost1: React.FC = () => {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        Next.js dan TypeScript telah menjadi kombinasi standar dalam pengembangan web modern. Dengan kemampuan rendering Next.js yang fleksibel dan kekuatan pengetikan statis TypeScript, developer dapat membangun web berskala besar dengan lebih percaya diri dan minim bug.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">1. Autocomplete dan Penjelajahan Kode yang Cepat</h3>
      <p className="mb-6">
        TypeScript memberikan sistem auto-completion yang cerdas (IntelliSense) langsung di code editor Anda. Ketika Anda mengimpor properti dari Next.js seperti Link, Image, atau config API, editor akan memberikan deskripsi detail tipe props yang valid. Hal ini mengurangi kebutuhan untuk terus-menerus membuka tab dokumentasi eksternal.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">2. Keamanan Tipe pada Routing & API</h3>
      <p className="mb-6">
        Pada Next.js App Router, routing dynamic segment memerlukan parsing params yang valid. Dengan TypeScript, kita dapat mengetik layout props dan page props secara eksplisit untuk memastikan parameter dynamic path terdefinisi dengan benar:
      </p>
      
      <pre className="p-4 bg-muted border rounded-xl overflow-x-auto text-sm font-mono mb-6">
{`interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <h1>Product: {id}</h1>;
}`}
      </pre>

      <h3 className="text-xl font-bold mt-8 mb-4">3. Next.js Typegen</h3>
      <p className="mb-6">
        Next.js menyertakan fitur code generator khusus untuk TypeScript yang secara otomatis membuat file konfigurasi tipe global. Fitur ini memvalidasi link routing Anda di seluruh project dan memberikan warning jika Anda mengarahkan link ke rute yang tidak valid.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Kesimpulan</h3>
      <p className="mb-6">
        Mengadopsi TypeScript dalam project Next.js Anda bukan sekadar tentang menambahkan tipe data, melainkan investasi dalam produktivitas tim jangka panjang dan kestabilan aplikasi production.
      </p>
    </article>
  );
};

// Post 2 Content Component
const MdxPost2: React.FC = () => {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <p className="text-lg leading-relaxed mb-6">
        Performa website merupakan salah satu faktor penentu kepuasan pengguna dan peringkat SEO di mesin pencari. Dengan dirilisnya App Router pada Next.js, ada banyak cara baru untuk mempercepat waktu pemuatan halaman Anda.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">1. Manfaatkan React Server Components (RSC)</h3>
      <p className="mb-6">
        Secara default, semua komponen di App Router adalah Server Components. Ini berarti komponen tersebut dirender di server dan HTML-nya dikirimkan ke client tanpa menyertakan bundle JavaScript komponen tersebut. Gunakan Client Components (menggunakan direktif <code>&apos;use client&apos;</code>) hanya untuk bagian yang interaktif, seperti form input atau accordion.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">2. Optimasi Gambar dengan next/image</h3>
      <p className="mb-6">
        Hindari menggunakan tag HTML <code>&lt;img&gt;</code> biasa. Komponen <code>Image</code> dari Next.js secara otomatis melakukan:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Konversi format gambar ke WebP atau AVIF yang sangat ringan.</li>
        <li>Resizing gambar sesuai dengan viewport layar perangkat pengguna.</li>
        <li>Lazy-loading otomatis untuk gambar di bawah garis lipatan (below-the-fold).</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">3. Penerapan Dynamic Imports</h3>
      <p className="mb-6">
        Gunakan <code>next/dynamic</code> untuk memecah bundle JavaScript. Komponen yang berat atau jarang digunakan (seperti grafik penjualan atau modal popup) dapat dimuat secara asinkron hanya ketika dibutuhkan.
      </p>
      
      <pre className="p-4 bg-muted border rounded-xl overflow-x-auto text-sm font-mono mb-6">
{`import dynamic from 'next/dynamic'

const ChartComponent = dynamic(() => import('@/components/Chart'), {
  loading: () => <p>Memuat grafik...</p>,
})`}
      </pre>

      <h3 className="text-xl font-bold mt-8 mb-4">4. Memahami dynamicParams dan caching</h3>
      <p className="mb-6">
        Next.js 16 memiliki performa caching static assets yang sangat cepat. Prerender sebanyak mungkin halaman menggunakan <code>generateStaticParams()</code> agar web tersaji instan dari Content Delivery Network (CDN).
      </p>
    </article>
  );
};

// Blog Articles Dataset Export
export const blogPosts: BlogPost[] = [
  {
    slug: "mengapa-typescript-terbaik-untuk-nextjs",
    title: "Mengapa TypeScript adalah Pilihan Terbaik untuk Project Next.js",
    excerpt: "Evaluasi mendalam tentang integrasi tipe data statis, peningkatan produktivitas, dan auto-completion dalam framework modern.",
    date: "June 1, 2026",
    readTime: "5 min read",
    category: "TypeScript",
    content: MdxPost1,
  },
  {
    slug: "optimasi-performa-nextjs-app-router",
    title: "Tips Optimasi Performa Next.js App Router",
    excerpt: "Pelajari cara mengoptimalkan runtime Next.js dengan Server Components, dynamic imports, dan optimalisasi rendering gambar.",
    date: "May 20, 2026",
    readTime: "8 min read",
    category: "Performance",
    content: MdxPost2,
  },
];
