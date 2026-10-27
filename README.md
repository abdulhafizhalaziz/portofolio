# Portofolio — Abdul Hafizh Al Aziz

Situs portofolio pribadi dengan React + Vite. Dua bahasa (Indonesia/English), animasi saat digulir,
karusel sertifikat 3D, dan pop-up detail proyek.

> Panduan lengkap merawat dan memperbarui situs: lihat **PEDOMAN-MAINTENANCE.md**.

## Menjalankan di komputer

1. Pasang **Node.js versi 20 atau lebih baru** dari https://nodejs.org (pilih versi LTS).
2. Buka folder ini di VS Code, lalu di terminal:

```
npm install
npm run dev
```

3. Buka alamat yang muncul (biasanya http://localhost:5173). Setiap file disimpan, halaman ikut berubah.

## Mengubah isi

| Yang ingin diubah | Tempatnya |
| --- | --- |
| Semua teks (profil, proyek, pengalaman, sertifikat, kontak) | `src/data/profile.js` |
| Foto di halaman utama | `public/images/foto.png` (PNG latar transparan, tinggi ± 1400 px) |
| Gambar proyek | `public/projects/` lalu isi `image` di `profile.js` |
| File CV untuk tombol Unduh CV | `public/cv/CV_Abdul_Hafizh_Al_Aziz_IND.pdf` dan `_ENG.pdf` (mengikuti bahasa situs) |
| Warna utama (merah) | `--accent` di bagian 01 `src/styles/global.css` |
| Ikon keahlian | daftar `ICONS` di `src/components/Skills.jsx` |

Setiap teks punya dua bahasa: `{ id: 'Teks Indonesia', en: 'English text' }`.

**Foto:** selama `foto.png` belum ada, halaman utama menampilkan lingkaran inisial "AH".
Hapus latar foto dengan remove.bg atau fitur Hapus Latar Belakang di Canva, lalu simpan sebagai PNG.

## Struktur folder

```
public/            file yang disalin apa adanya (foto, CV, gambar proyek, favicon)
src/
  data/profile.js  SEMUA ISI SITUS
  components/      satu file per bagian halaman (Hero, About, Projects, ...)
  hooks/           logika kecil: bahasa, bagian aktif
  styles/          global.css (ada daftar isi bernomor di atasnya)
```

## Deploy ke Vercel

Sama seperti situs Panduan ODS:

1. Buat repository baru di GitHub, misalnya `portfolio`.
2. Di terminal folder ini:

```
git init
git add .
git commit -m "Portofolio versi pertama"
git branch -M main
git remote add origin https://github.com/abdulhafizhalaziz/portfolio.git
git push -u origin main
```

3. Di vercel.com: **Add New → Project → Import** repository tersebut. Vercel otomatis mengenali Vite,
   jadi cukup klik **Deploy**.
4. Perubahan berikutnya cukup `git add .`, `git commit -m "..."`, `git push`.
