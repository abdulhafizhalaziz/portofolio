# Pedoman Maintenance — Portofolio Abdul Hafizh Al Aziz

Panduan merawat dan memperbarui situs portofolio (React + Vite), dari mengganti teks sampai menayangkannya di Vercel.

---

## 1. Ringkasan

| Hal | Keterangan |
| --- | --- |
| Folder proyek | `C:\xampp\htdocs\portfolio-hafizh` |
| Kode sumber | GitHub: `abdulhafizhalaziz/portofolio` |
| Situs online | Vercel (otomatis diperbarui setiap `git push`) |
| Cek di komputer | `npm run dev` → http://localhost:5173, atau XAMPP → http://localhost/portfolio-hafizh/ |
| Hampir semua isi | `src/data/profile.js` |

---

## 2. Alur kerja setiap kali ada perubahan

```
1. Ubah file  →  2. Cek di localhost  →  3. git add / commit / push  →  4. Cek situs Vercel
```

**Langkah 1–2 (di VS Code, terminal di folder proyek):**

```
npm run dev
```

Buka http://localhost:5173. Setiap file disimpan, halaman langsung berubah. Tekan `Ctrl + C` di terminal untuk berhenti.

**Langkah 3 (setelah yakin hasilnya benar):**

```
git add .
git commit -m "Tulis perubahan singkat, mis. Tambah sertifikat AWS"
git push
```

**Langkah 4:** tunggu ± 1 menit, buka situs Vercel, tekan `Ctrl + F5`.

> Versi XAMPP (`localhost/portfolio-hafizh/`) memakai folder `dist`. Agar ikut berubah, jalankan `npm run build`.
> Vercel tidak memakai folder `dist` Anda — Vercel membangunnya sendiri dari GitHub.

**Pertama kali di komputer baru:** pasang Node.js (versi LTS) dari nodejs.org, lalu jalankan `npm install` sekali.

---

## 3. Peta file — apa diubah di mana

| Yang ingin diubah | File |
| --- | --- |
| Nama, jabatan, status, teks Tentang Saya, kontak | `src/data/profile.js` → `profile` |
| Daftar keahlian | `src/data/profile.js` → `skillGroups` |
| Ikon & warna keahlian | `src/components/Skills.jsx` → `ICONS` |
| Proyek | `src/data/profile.js` → `projects` |
| Pengalaman kerja | `src/data/profile.js` → `experience` |
| Pendidikan | `src/data/profile.js` → `education` |
| Sertifikat | `src/data/profile.js` → `certificates` |
| Teks tombol, judul bagian, menu | `src/data/profile.js` → `ui` |
| Foto profil | `public/images/foto.png` |
| Gambar proyek | `public/projects/` |
| File CV (tombol Unduh CV) | `public/cv/CV_Abdul_Hafizh_Al_Aziz_IND.pdf` dan `..._ENG.pdf` |
| Warna, ukuran, tata letak | `src/styles/global.css` (ada daftar isi bernomor di atasnya) |
| Judul tab & deskripsi Google | `index.html` |

**Aturan dua bahasa:** setiap teks ditulis `{ id: 'Bahasa Indonesia', en: 'English' }`.
Selalu isi keduanya, supaya tombol ID/EN tetap berfungsi.

---

## 4. Tugas yang paling sering

### 4.1 Menambah proyek

1. Simpan screenshot proyek di `public/projects/`, mis. `aplikasi-baru.jpg`
   (lebar ± 1280 px, format JPG agar ringan).
2. Di `profile.js`, salin satu blok proyek di dalam `projects: [ ... ]`, lalu ubah isinya:

```js
{
  key: 'aplikasi-baru',            // unik, huruf kecil, tanpa spasi
  title: { id: 'Aplikasi Baru', en: 'New App' },
  year: '2027',
  type: { id: 'Proyek pribadi', en: 'Personal project' },
  image: `${BASE}projects/aplikasi-baru.jpg`,
  summary: { id: 'Kalimat singkat...', en: 'Short sentence...' },
  points: {
    id: ['Poin 1', 'Poin 2'],
    en: ['Point 1', 'Point 2'],
  },
  tags: ['React', 'MySQL'],
  live: 'https://alamat-situs.com', // kosongkan '' jika tidak ada
  repo: '',                         // link GitHub, atau ''
},
```

Proyek **pertama** di daftar tampil lebar (unggulan). Urutkan dari yang paling ingin ditonjolkan.

### 4.2 Menambah pengalaman kerja

Salin satu blok di `experience: [ ... ]`. Urutan = urutan tampil, jadi taruh pekerjaan terbaru di **paling atas**.

```js
{
  role: { id: 'Jabatan', en: 'Position' },
  org: 'Nama Instansi',             // boleh juga { id: '...', en: '...' }
  period: { id: 'Jan 2027 – sekarang', en: 'Jan 2027 – present' },
  points: { id: ['Tugas 1', 'Tugas 2'], en: ['Task 1', 'Task 2'] },
},
```

### 4.3 Menambah sertifikat

Salin satu blok di `certificates: [ ... ]`:

```js
{
  title: { id: 'Nama Sertifikat', en: 'Certificate Name' },
  issuer: 'Lembaga Penerbit',
  number: '123456',
  issued: { id: '10 Januari 2027', en: '10 January 2027' },
  valid: { id: 'Berlaku hingga Januari 2030', en: 'Expires on January 2030' }, // atau null
  link: 'https://link-verifikasi-sertifikat',
  featured: true,                  // opsional: segel emas untuk sertifikat utama
},
```

`number` harus berbeda dari sertifikat lain (dipakai sebagai penanda).

### 4.4 Menambah keahlian

1. Tambahkan namanya di `skillGroups` (mis. `'React'`).
2. Jika tidak ada ikonnya, tambahkan di `ICONS` pada `src/components/Skills.jsx`:

```js
import { SiReact } from 'react-icons/si';   // tambahkan di baris import
...
React: [SiReact, '#61dafb'],                // [Ikon, warna saat disorot]
```

Cari nama ikon di https://react-icons.github.io/react-icons (awalan `Si` = logo merek, `Tb` = ikon umum).
Jika lupa, keahlian tetap tampil dengan ikon bohlam bawaan.

Untuk label bahasa Inggris yang berbeda, tambahkan di `skillLabelsEn`, mis. `'Basis Data': 'Database Design'`.

### 4.5 Mengganti foto profil

1. Pakai foto setengah badan (kepala sampai pinggang), wajah menghadap kamera atau sedikit menyamping.
2. Hapus latar: remove.bg atau Canva → **Hapus Latar Belakang**.
3. Simpan sebagai **PNG** (latar transparan), tinggi ± 1000–1400 px.
4. Timpa file `public/images/foto.png` (nama harus sama persis).

Pakaian gelap tetap terlihat karena ada cahaya merah tipis di tepi foto (diatur di bagian 06 `global.css`, `.hero-photo img`).

### 4.6 Mengganti CV

Timpa `public/cv/CV_Abdul_Hafizh_Al_Aziz_IND.pdf` dan `..._ENG.pdf` dengan nama **sama persis**.
Jika ingin nama lain, ubah juga `cv` di bagian atas `profile.js`.

Setelah CV berubah, samakan isinya di situs: Tentang Saya, pengalaman, sertifikat.

### 4.7 Mengubah warna utama

Di `src/styles/global.css` bagian **01**, ganti:

```css
--accent: #e11d2e;      /* merah utama */
--accent-soft: #fb7185; /* merah muda untuk teks kecil */
```

Warna latar bercahaya di Hero dan bagian lain masih memakai merah `rgba(225, 29, 46, ...)` —
ganti angka itu juga jika ingin seluruh situs berganti warna.

### 4.8 Menampilkan WhatsApp atau Instagram

Di `profile.js` → `contact`:

```js
instagram: 'https://instagram.com/username',
whatsapp: '628881033639',   // format internasional tanpa + dan tanpa spasi
```

Pertimbangkan privasi: nomor yang tampil di situs publik bisa dikumpulkan bot spam.

---

## 5. Daftar periksa sebelum `git push`

- [ ] Teks ID **dan** EN sudah diisi, dan tombol ID/EN dicoba
- [ ] Tidak ada salah ketik nama, tanggal, nomor sertifikat
- [ ] Gambar baru tampil (nama file di `profile.js` sama persis dengan file di `public/`, termasuk huruf besar/kecil)
- [ ] Dicek di ukuran HP: di Chrome tekan `F12` → ikon HP (Toggle device toolbar)
- [ ] Menu HP (ikon ☰) bisa dibuka-tutup
- [ ] Tombol Unduh CV mengunduh file terbaru
- [ ] Terminal `npm run dev` tidak menampilkan error merah

---

## 6. Perawatan berkala

| Kapan | Yang dilakukan |
| --- | --- |
| Setiap ada pekerjaan/sertifikat/proyek baru | Perbarui CV dan situs bersamaan |
| Setiap 3 bulan | Klik semua link sertifikat dan proyek, pastikan masih terbuka |
| Setiap 3 bulan | Cek dashboard Vercel → Deployments: status terakhir harus **Ready** |
| Setiap 6 bulan | Ganti screenshot proyek yang tampilannya sudah berubah |
| Setiap awal tahun | Periksa tahun di footer otomatis berganti; perbarui status di Tentang Saya |
| Saat masa berlaku sertifikat habis | Perbarui `valid`, atau ganti dengan sertifikat baru |

**Tentang pembaruan paket (npm):** versi paket sengaja dikunci di `package.json` agar situs stabil.
Jangan jalankan `npm update` atau `npm audit fix --force` sembarangan. Jika suatu saat perlu,
lakukan di branch terpisah dan cek hasilnya di localhost sebelum digabung.

---

## 7. Mengatasi masalah

| Gejala | Penyebab & solusi |
| --- | --- |
| `npm` tidak dikenali | Node.js belum terpasang → pasang versi LTS, tutup-buka VS Code |
| `vite` tidak dikenali / error modul tidak ditemukan | Belum `npm install` → jalankan sekali |
| Halaman putih kosong | Ada salah ketik di `profile.js` (koma atau kurung kurang). Lihat pesan merah di terminal `npm run dev`, atau di Chrome `F12` → Console |
| Gambar tidak muncul di Vercel, tapi muncul di komputer | Huruf besar/kecil nama file berbeda (`Foto.png` ≠ `foto.png`) |
| Perubahan tidak muncul di Vercel | Belum `git push`, atau tekan `Ctrl + F5`. Cek Vercel → Deployments |
| Deploy Vercel gagal (Error) | Buka deployment yang gagal → **Build Logs**, baca baris merah pertama. Biasanya salah ketik di kode |
| Situs rusak setelah perubahan | Vercel → Deployments → deployment lama yang normal → **⋯ → Instant Rollback**. Lalu perbaiki kodenya |
| Versi XAMPP tidak berubah | Jalankan `npm run build`, lalu `Ctrl + F5` di localhost/portfolio-hafizh |
| `git push` ditolak: *rejected / fetch first* | Ada perubahan di GitHub yang belum ada di komputer → `git pull`, lalu `git push` lagi |

---

## 8. Struktur folder

```
portfolio-hafizh/
├─ public/                 file yang disalin apa adanya
│  ├─ cv/                  CV (IND & ENG)
│  ├─ images/foto.png      foto profil
│  ├─ projects/            screenshot proyek
│  └─ favicon.svg          ikon tab browser
├─ src/
│  ├─ data/profile.js      ★ SEMUA ISI SITUS
│  ├─ components/          satu file per bagian halaman
│  │   Header · SideRails · Hero · About · Skills · Marquee
│  │   Projects · ProjectArt · Experience · Certificates · Contact
│  ├─ hooks/               bahasa (useLang) & bagian aktif (useActiveSection)
│  ├─ styles/global.css    semua tampilan (daftar isi bernomor 01–14)
│  └─ main.jsx, App.jsx    titik awal aplikasi & urutan bagian
├─ dist/                   hasil build untuk XAMPP (tidak ikut ke GitHub)
├─ index.html              judul tab & deskripsi
├─ package.json            daftar paket (versi dikunci)
├─ .gitignore              file yang tidak ikut ke GitHub
├─ .htaccess               khusus XAMPP: mengarahkan ke dist/
├─ README.md               ringkasan proyek
└─ PEDOMAN-MAINTENANCE.md  dokumen ini
```

Untuk mengubah **urutan bagian** halaman (mis. Sertifikat sebelum Pengalaman), tukar baris komponennya di `src/App.jsx`,
lalu sesuaikan urutan di `SECTIONS` (`src/hooks/useActiveSection.js`) dan `LINKS` (`src/components/Header.jsx`).
