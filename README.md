# 🎧 ROL Music – Rhythm Of Life Web Experience

> **Proyek UAS HTML** — Platform eksplorasi musik interaktif dengan katalog artis, album, artikel, dan pengalaman keanggotaan yang imersif berbasis web statis

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Boxicons](https://img.shields.io/badge/Boxicons-29A5E2?style=for-the-badge&logo=react&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-green?style=for-the-badge)

---

## 🌟 Ikhtisar

**ROL Music** menghadirkan pengalaman penjelajahan musik all-in-one yang menampilkan rekomendasi artis dan album populer, artikel kurasi musik, serta onboarding membership dengan visual yang menarik. Seluruh konten dikelola melalui HTML statis, styling adaptif CSS, dan interaksi JavaScript yang terhubung ke API publik.


---

## 📑 Halaman & Konten

| Halaman | Deskripsi Utama |
|---------|-----------------|
| `html/index.html` | Landing page dengan hero headline, rekomendasi artis & album, dan pemutar embed dinamis |
| `html/article.html` | Feed artikel musik dengan daftar konten kurasi dan visual sponsor kiri-kanan |
| `html/member.html` | Onboarding membership dengan background video, form Sign In/Sign Up, dan navigasi anchor smooth |
| `html/about.html` | Profil platform, misi ROL Music, dan highlight fitur komunitas |
| `html/saran-artis.html` | Direktori artis lengkap dengan pencarian real-time serta pemutar Spotify embed |
| `html/saran-album.html` | Katalog album unggulan dengan filter judul dan preview audio |

---

## ✨ Sorotan Fitur

### 🎵 Beranda Dinamis
- Hero section terbentuk melalui manipulasi DOM (`main.js`) untuk judul dan tagline adaptif
- Slider horizontal rekomendasi artis & album dengan kartu interaktif dan efek hover
- Pemutar iframe otomatis mengganti konten berdasarkan pilihan pengguna

### 📰 Portal Artikel
- Konten artikel di-*render* dari array objek JavaScript (`article.js`)
- Layout kolom dengan iklan/figur pendukung dan highlight tanggal kategori
- Hover state memanfaatkan translucent overlay agar fokus pada gambar

### 🧾 Membership Flow
- Latar video looping (`assets/bg.mp4`) dengan overlay teks pusat
- Form Sign In/Sign Up dikontrol anchor dan JavaScript (`member.js`) untuk toggle tampilan
- Checkbox Remember Me, tautan lupa password, dan validasi HTML

### 🎤 Direktori Artis & Album
- Konsumsi API `https://rol-music.vercel.app/api/artist` & `/api/albums`
- Pencarian real-time berbasis `input` event dengan filter case-insensitive
- Embed Spotify/YouTube otomatis dengan animasi scroll halus menuju player

### 🧭 Navigasi Responsif
- Header sticky dengan transisi warna saat scroll (`header.js`)
- Menu hamburger mobile dengan animasi slide-in dan ikon Boxicons
- Tooltip teks pada ikon navigasi di layar besar

---

## 🔗 Integrasi API

| Endpoint | Tujuan | Field Kunci |
|----------|--------|-------------|
| `GET /api/artist` | Menyusun rekomendasi artis & detail embed | `name`, `image`, `embed` |
| `GET /api/albums` | Mengisi katalog album dan preview audio | `title`, `name`, `image`, `embed` |

Semua permintaan dilakukan via `fetch()` dan dibangun ulang menjadi elemen `<figure>` sebelum dirender.

---

## 🎨 Desain & Interaksi

### Palet Warna
```css
/* Tema hangat vintage */
Beige: #f5f5dc;
Brown: rgb(91, 61, 39);
Rosewood: #744253;
Gradient Saran Pages: linear-gradient(90deg, rgba(229,152,155,1) 0%, rgba(109,104,117,1) 50%, rgba(181,131,141,1) 100%);
```

### Tipografi
- **Roboto** untuk keseluruhan antarmuka
- **Roboto Slab** pada halaman About untuk aksen editorial

### Animasi & UX Microinteraction
- Scroll-linked header state (`header.scroll`)
- Hover effect translucent pada kartu artis/album
- Smooth scroll ke iframe player dan form membership
- Responsive menu toggle dengan transisi transform

---

## 📱 Responsive Breakpoints (`css/responsive.css`)

| Breakpoint | Target Device | Penyesuaian Utama |
|------------|---------------|-------------------|
| `max-width: 1115px` | Laptop kecil / tablet landscape | Skala kartu, teks, dan footer |
| `max-width: 885px` | Tablet portrait | Reflow layout artikel & form member |
| `max-width: 576px` | Smartphone | Menu hamburger, stack footer, grid 1 kolom |
| `max-width: 391px` & `321px` | Smartphone mini | Penyetelan ulang font dan ikon |
| `max-width: 281px` & `163px` | Extra small | Optimasi tinggi header & form |

---

## 🧠 Arsitektur Frontend

- `js/main.js` — Membentuk hero, memanggil API artis/album, dan menginisialisasi pemutar
- `js/article.js` — Meng-*render* feed berita dari dataset lokal dan membungkus tiap entri dengan tautan sumber
- `js/member.js` — Mengelola transisi form membership dengan anchor-driven modal
- `js/header.js` — Menangani sticky header, perubahan warna, dan navigasi mobile
- `js/saran-artis.js` & `js/saran-album.js` — Pencarian real-time, render kartu, dan kontrol iframe embed

Semua modul berbagi gaya dasar via `css/style.css` ditambah stylesheet khusus (`article.css`, `member.css`, `about.css`, `saran.css`) untuk kebutuhan halaman.

---

## 💾 Struktur Proyek

```
UAS HTML AJENG AZZAHRA MAHARANI/
├── assets/
│   ├── about.jpg
│   ├── bg.mp4
│   └── (koleksi gambar sponsor & ikon pendukung)
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── article.css
│   ├── member.css
│   ├── about.css
│   └── saran.css
├── html/
│   ├── index.html
│   ├── article.html
│   ├── member.html
│   ├── about.html
│   ├── saran-artis.html
│   └── saran-album.html
├── js/
│   ├── main.js
│   ├── header.js
│   ├── article.js
│   ├── member.js
│   ├── saran-artis.js
│   └── saran-album.js
└── .vscode/
    └── (pengaturan editor)
```

---

## 🔍 Alur Pengalaman Pengguna

1. Pengguna mendarat di beranda dan mengenal identitas ROL Music melalui hero headline.
2. Carousel horizontal menampilkan rekomendasi artis/album; pilih salah satu untuk memicu embed player.
3. Navigasi global mengarahkan ke artikel, profil platform, atau flow membership.
4. Pada halaman membership, pengguna memilih Sign In atau Sign Up, lalu diarahkan ke form yang relevan.
5. Direktori artis/album menyediakan pencarian instan; hasil klik menampilkan pemutar interaktif.

---

## 🗒️ Catatan Pengembangan

- Semua ikon diambil dari **Boxicons CDN** untuk konsistensi gaya UI.
- Iframe embed memanfaatkan data `embed` dari API, pastikan sumber memperbolehkan embedding.
- Gambar sponsor pada halaman artikel mendukung nuansa komersial dan keseimbangan visual.
- Penulisan CSS menggunakan kombinasi gradient dan shadow untuk tekstur vintage-modern.

---

## 🙌 Pengembang

**Ajeng Azzahra Maharani** — Desain, implementasi front-end, dan integrasi API.

---

<div align="center">

### 🎶 Selamat menikmati ritme kehidupan bersama ROL Music!

</div>
