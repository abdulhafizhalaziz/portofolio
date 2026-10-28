/* ==========================================================================
   DATA PORTOFOLIO — ubah isi situs di file ini saja.
   Setiap teks punya dua bahasa: { id: 'Indonesia', en: 'English' }.
   Gambar diletakkan di folder public/ (lihat README.md).
   ========================================================================== */

// Awalan alamat file di folder public/ (otomatis benar di localhost maupun Vercel)
const BASE = import.meta.env.BASE_URL;

export const profile = {
  nameFull: 'Abdul Hafizh Al Aziz',
  nameShort: 'HAFIZH', // tulisan besar di halaman utama
  nameSlide: 'ABDUL HAFIZH AL AZIZ', // tulisan yang bergerak di belakang foto
  logo: { main: 'HAFIZH', accent: '.' },

  // Foto: taruh file PNG latar transparan di public/images/foto.png
  photo: `${BASE}images/foto.png`,
  // CV yang diunduh mengikuti bahasa situs
  cv: {
    id: `${BASE}cv/CV_Abdul_Hafizh_Al_Aziz_IND.pdf`,
    en: `${BASE}cv/CV_Abdul_Hafizh_Al_Aziz_ENG.pdf`,
  },

  role: {
    id: 'Analis Sistem & Pengembang Web',
    en: 'System Analyst & Web Developer',
  },
  heroTag: {
    id: 'Sistem Informasi · Pengembangan Web · Jaringan Komputer',
    en: 'Information Systems · Web Development · Computer Networks',
  },
  location: { id: 'Depok, Jawa Barat', en: 'Depok, West Java' },
  status: {
    id: 'Peserta MagangHub · Kementerian Koperasi',
    en: 'MagangHub Intern · Ministry of Cooperatives',
  },

  // Sama dengan bagian PROFIL / SUMMARY di CV
  about: {
    id: 'Lulusan Sistem Informasi dengan minat yang kuat pada teknologi informasi, pengembangan sistem, dan jaringan komputer. Berpengalaman dalam merancang, mengimplementasikan, dan mengelola sistem serta infrastruktur jaringan menggunakan berbagai teknologi dan perangkat pendukung. Mampu bekerja secara mandiri maupun dalam tim, dengan kemampuan analitis yang baik serta mampu mengidentifikasi dan menyelesaikan masalah teknis secara efektif. Berkomitmen untuk terus mengembangkan kompetensi profesional di bidang teknologi informasi dan berkontribusi menghadirkan solusi yang efisien dan bernilai bagi organisasi.',
    en: 'Information Systems graduate with a strong interest in information technology, system development, and computer networking. Experienced in designing, implementing, and managing systems and network infrastructures using various technologies and supporting tools. Capable of working independently as well as collaboratively within a team, with strong analytical skills and the ability to effectively troubleshoot and resolve technical issues. Committed to continuously developing professional competencies in the field of information technology and contributing to the creation of efficient and valuable solutions for organizations.',
  },

  contact: {
    email: 'abdulhafizhalaziz9@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abdhafizhalaziz/',
    github: 'https://github.com/abdulhafizhalaziz',
    instagram: '', // isi link Instagram jika ingin ditampilkan
    // Nomor WhatsApp format internasional tanpa + (contoh: '628881033639').
    // Dikosongkan secara bawaan agar nomor pribadi tidak tersebar di internet.
    whatsapp: '',
    availability: {
      id: 'Terbuka untuk pekerjaan penuh waktu, proyek lepas, dan kolaborasi.',
      en: 'Available for full-time roles, freelance projects, and collaboration.',
    },
  },
};

/* ---------- Keahlian (ikon diatur di src/components/Skills.jsx) ---------- */
export const skillGroups = [
  {
    key: 'web',
    title: { id: 'Pengembangan Web', en: 'Web Development' },
    items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'REST API'],
  },
  {
    key: 'network',
    title: { id: 'Jaringan Komputer', en: 'Computer Networks' },
    items: ['MikroTik', 'Cisco Packet Tracer', 'VLAN', 'TCP/IP', 'Troubleshooting'],
  },
  {
    key: 'analysis',
    title: { id: 'Analisis Sistem', en: 'System Analysis' },
    items: ['Proses Bisnis', 'UML', 'Basis Data', 'Analisis Kebutuhan', 'Oracle', 'SQL Server'],
  },
  {
    key: 'tools',
    title: { id: 'Perangkat', en: 'Tools' },
    items: ['Git', 'GitHub', 'VS Code', 'Microsoft Office', 'Figma', 'Canva'],
  },
  {
    key: 'soft',
    title: { id: 'Keterampilan Profesional', en: 'Professional Skills' },
    items: ['Pemecahan Masalah', 'Berpikir Analitis', 'Komunikasi', 'Kolaborasi Tim', 'Manajemen Waktu', 'Dokumentasi Teknis', 'Bahasa Inggris'],
  },
];

// Label keahlian dalam bahasa Inggris (yang tidak ada di sini tetap sama)
export const skillLabelsEn = {
  'Proses Bisnis': 'Business Process',
  'Basis Data': 'Database Design',
  'Analisis Kebutuhan': 'Requirements Analysis',
  'Pemecahan Masalah': 'Problem Solving',
  'Berpikir Analitis': 'Analytical Thinking',
  Komunikasi: 'Communication',
  'Kolaborasi Tim': 'Team Collaboration',
  'Manajemen Waktu': 'Time Management',
  'Dokumentasi Teknis': 'Technical Writing',
  'Bahasa Inggris': 'English (Intermediate)',
};

/* ---------- Proyek ---------- */
// image: taruh screenshot di public/projects/. Kosongkan ('') untuk gambar ilustrasi otomatis.
export const projects = [
  {
    key: 'ods',
    title: { id: 'Situs Panduan ODS Mandiri', en: 'ODS Mandiri Guide Website' },
    year: '2026',
    type: { id: 'Situs informasi', en: 'Information website' },
    image: `${BASE}projects/panduan-ods.jpg`,
    summary: {
      id: 'Situs panduan penggunaan ODS Mandiri untuk koperasi dan dinas, berisi 34 tutorial langkah demi langkah dengan video.',
      en: 'A user guide website for ODS Mandiri, serving cooperatives and local agencies with 34 step-by-step tutorials and videos.',
    },
    points: {
      id: [
        'Menyusun 34 halaman panduan berdasarkan petunjuk teknis resmi.',
        'Membangun pencarian, filter koperasi/dinas, dan halaman persyaratan dokumen.',
        'Menyusun struktur PHP yang rapi dengan template dan data terpusat.',
      ],
      en: [
        'Wrote 34 guide pages based on the official technical manual.',
        'Built search, cooperative/agency filters, and a document requirements page.',
        'Organised the PHP code with shared templates and centralised data.',
      ],
    },
    tags: ['PHP', 'JavaScript', 'CSS', 'Vercel'],
    live: 'https://preview-latihan.vercel.app',
    repo: '',
  },
  {
    key: 'pos',
    title: { id: 'Sistem Point of Sale Toko Snack', en: 'Point of Sale System for a Snack Shop' },
    year: '2025',
    type: { id: 'Proyek akademik', en: 'Academic project' },
    image: `${BASE}projects/snackinaja-pos.jpg`,
    summary: {
      id: 'Aplikasi kasir berbasis web untuk mencatat transaksi penjualan, memantau stok, dan membuat laporan penjualan.',
      en: 'A web-based cashier application for recording sales, tracking stock, and generating sales reports.',
    },
    points: {
      id: [
        'Merancang dan membangun fitur pengelolaan produk, stok, dan transaksi.',
        'Menyediakan laporan penjualan untuk pemilik toko.',
        'Mempercepat pencatatan transaksi dan pemantauan persediaan.',
      ],
      en: [
        'Designed and built product, stock, and transaction management features.',
        'Provided sales reports for the shop owner.',
        'Made transaction recording and stock monitoring faster.',
      ],
    },
    tags: ['PHP', 'MySQL'],
    live: '',
    repo: '',
  },
  {
    key: 'depokeren',
    title: { id: 'Website Pariwisata Depokeren', en: 'Depokeren Tourism Website' },
    year: '2024',
    type: { id: 'Proyek akademik', en: 'Academic project' },
    image: `${BASE}projects/depokeren.jpg`,
    summary: {
      id: 'Sistem informasi pariwisata berbasis web untuk mengelola dan menampilkan destinasi wisata di Depok.',
      en: 'A web-based tourism information system for managing and presenting destinations in Depok.',
    },
    points: {
      id: [
        'Merancang struktur basis data dan antarmuka pengelolaan destinasi.',
        'Membangun fitur pengelolaan destinasi dan informasi pendukung.',
        'Melakukan pengujian fungsi dan kemudahan penggunaan.',
      ],
      en: [
        'Designed the database structure and destination management interface.',
        'Built features for managing destinations and related information.',
        'Tested functionality and usability.',
      ],
    },
    tags: ['PHP', 'MySQL'],
    live: '',
    repo: '',
  },
];

/* ---------- Pengalaman & pendidikan ---------- */
export const experience = [
  {
    role: { id: 'Peserta MagangHub — Rencana Pengembangan dan Pengelolaan Data', en: 'MagangHub Intern — Data Development and Management Planning' },
    org: {
      id: 'Kementerian Koperasi · Asisten Deputi Pengelolaan Data, Deputi Bidang Kelembagaan dan Digitalisasi Koperasi',
      en: 'Ministry of Cooperatives · Assistant Deputy for Data Management, Deputy for Cooperative Institutional Affairs and Digitalization',
    },
    period: { id: 'Sep 2026 – Mar 2027', en: 'Sept 2026 – March 2027' },
    points: {
      id: [
        'Mendukung pengembangan dan pengelolaan data koperasi melalui sistem ODS.',
        'Memutakhirkan, menyinkronkan, dan memvalidasi data koperasi untuk menjaga akurasi dan konsistensi data.',
        'Merekapitulasi pengaduan masyarakat yang masuk melalui email dan WhatsApp untuk dokumentasi dan tindak lanjut.',
        'Mengembangkan situs web tutorial ODS dan menyunting video panduan berdasarkan petunjuk teknis.',
        'Membantu input data dan kegiatan administrasi terkait pelaporan koperasi.',
      ],
      en: [
        'Supporting the development and management of cooperative data through the ODS system.',
        'Updating, synchronizing, and validating cooperative data to help maintain data accuracy and consistency.',
        'Recapitulating public complaints received through email and WhatsApp for documentation and follow-up.',
        'Developing a website for ODS tutorials and editing instructional videos based on technical manuals.',
        'Assisting with data entry and administrative activities related to cooperative reporting.',
      ],
    },
  },
  {
    role: { id: 'Guru TJKT (Teknik Jaringan Komputer dan Telekomunikasi)', en: 'TJKT Teacher (Computer and Network Engineering)' },
    org: 'Lembaga Pendidikan Kesuma Bangsa',
    period: { id: 'Jul 2025 – Jul 2026', en: 'July 2025 – July 2026' },
    points: {
      id: [
        'Mengajar materi jaringan komputer, administrasi jaringan, dan teknologi informasi kepada siswa sekolah menengah kejuruan.',
        'Mengembangkan modul pembelajaran, bahan ajar, dan asesmen yang sesuai dengan Kurikulum Merdeka.',
        'Membimbing siswa dalam kegiatan praktik jaringan menggunakan Cisco Packet Tracer dan perangkat MikroTik.',
        'Mengajarkan konsep jaringan meliputi VLAN, TCP/IP, routing, switching, dan pemecahan masalah jaringan.',
        'Menilai kinerja siswa dan memberikan bimbingan akademik untuk mendukung pencapaian hasil belajar.',
        'Membuat media pembelajaran yang menarik dan latihan praktik untuk meningkatkan keterampilan teknis siswa.',
      ],
      en: [
        'Deliver lessons on computer networking, network administration, and information technology to vocational high school students.',
        'Develop learning modules, teaching materials, and assessments aligned with the Merdeka Curriculum.',
        'Guide students in practical networking activities using Cisco Packet Tracer and MikroTik devices.',
        'Teach networking concepts including VLANs, TCP/IP, routing, switching, and network troubleshooting.',
        'Assess student performance and provide academic guidance to support learning outcomes.',
        'Create engaging learning media and hands-on exercises to enhance students’ technical skills.',
      ],
    },
  },
  {
    role: { id: 'Peserta Magang — Manajemen Aset dan Fasilitas DTV', en: 'Internship Student — Asset and Facility Management DTV' },
    org: 'PT Telekomunikasi Indonesia',
    period: { id: 'Okt 2019 – Des 2019', en: 'Oct 2019 – Dec 2019' },
    points: {
      id: [
        'Membantu pemeliharaan dan pemantauan infrastruktur TI serta sistem jaringan.',
        'Melakukan konfigurasi dasar jaringan dan pemecahan masalah jaringan.',
        'Mendukung dokumentasi teknis dan kegiatan pelaporan operasional.',
        'Berkolaborasi dengan anggota tim untuk menyelesaikan masalah teknis dan meningkatkan keandalan sistem.',
        'Membantu memastikan kelancaran operasional perangkat keras, perangkat lunak, dan layanan jaringan.',
      ],
      en: [
        'Assisted in the maintenance and monitoring of IT infrastructure and network systems.',
        'Performed basic network configuration and troubleshooting tasks.',
        'Supported technical documentation and operational reporting activities.',
        'Collaborated with team members to resolve technical issues and improve system reliability.',
        'Helped ensure the smooth operation of hardware, software, and network services.',
      ],
    },
  },
];

export const education = {
  school: 'Universitas Gunadarma',
  degree: { id: 'Sarjana Sistem Informasi', en: 'Bachelor of Information System' },
  period: '2021 – 2026',
  gpa: { id: '3,43 / 4,00', en: '3.43 / 4.00' },
  place: 'Jakarta, Indonesia',
};

/* ---------- Sertifikat ---------- */
export const certificates = [
  {
    title: { id: 'Okupasi Analis Sistem', en: 'Occupation of System Analyst' },
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    number: '14467397',
    issued: { id: 'September 2025', en: 'September 2025' },
    valid: { id: 'Berlaku hingga September 2028', en: 'Expires on September 2028' },
    link: 'https://drive.google.com/file/d/1mudlzVLv4PbnA2PSu50hD0oxFFt9OhH0/view?usp=sharing',
    featured: true,
  },
  {
    title: { id: 'Perancangan Perangkat Lunak', en: 'Designing Software' },
    issuer: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    number: '028122',
    issued: { id: '27 Mei 2025', en: '27 May 2025' },
    valid: { id: 'Berlaku seumur hidup', en: 'No expiration date' },
    link: 'https://e-sert.gunadarma.ac.id/cert/4621/signed_eca2b1dd1596ba08863fd07b36028122.pdf.pdf',
  },
  {
    title: { id: 'Analisis Kebutuhan Perangkat Lunak', en: 'Analyze Software Requirements' },
    issuer: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    number: '858889',
    issued: { id: '23 September 2024', en: '23 September 2024' },
    valid: { id: 'Berlaku seumur hidup', en: 'No expiration date' },
    link: 'https://e-sert.gunadarma.ac.id/cert/4252/6944a04abb84956663cc938f58b8eb89.pdf',
  },
  {
    title: { id: 'SQL Server Tingkat Menengah', en: 'SQL Server for Intermediate' },
    issuer: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    number: '024182',
    issued: { id: '19 Agustus 2024', en: '19 August 2024' },
    valid: { id: 'Berlaku seumur hidup', en: 'No expiration date' },
    link: 'https://e-sert.gunadarma.ac.id/cert/4006/9903207b8b8a814409afd6c0fd2b4182.pdf',
  },
  {
    title: { id: 'Oracle Tingkat Menengah', en: 'Oracle for Intermediate' },
    issuer: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    number: '318095',
    issued: { id: '19 Agustus 2024', en: '19 August 2024' },
    valid: { id: 'Berlaku seumur hidup', en: 'No expiration date' },
    link: 'https://e-sert.gunadarma.ac.id/cert/4005/signed_1311d7b92af09aabaf0e9fd31ddd8095.pdf.pdf',
  },
  {
    title: { id: 'Peserta Magang', en: 'Internship Student' },
    issuer: 'PT Telekomunikasi Indonesia',
    number: 'C. Tel. 371/PD520/WSB/2019',
    issued: { id: 'Magang Okt – Des 2019', en: 'Internship Oct – Dec 2019' },
    valid: null,
    link: 'https://drive.google.com/file/d/1VIlU-7phTXPdtSL34RerrRezw79OKKMX/view?usp=sharing',
  },
];

/* ---------- Teks antarmuka ---------- */
export const ui = {
  nav: {
    home: { id: 'Beranda', en: 'Home' },
    about: { id: 'Tentang', en: 'About' },
    projects: { id: 'Proyek', en: 'Projects' },
    experience: { id: 'Pengalaman', en: 'Experience' },
    certificates: { id: 'Sertifikat', en: 'Credentials' },
    contact: { id: 'Kontak', en: 'Contact' },
  },
  contactBtn: { id: 'Hubungi Saya', en: 'Contact Me' },
  scroll: { id: 'Gulir', en: 'Scroll' },
  aboutTag: { id: '01 · Profil', en: '01 · Profile' },
  aboutTitle: [{ id: 'TENTANG', en: 'ABOUT' }, { id: 'SAYA', en: 'ME' }],
  info: {
    name: { id: 'Nama lengkap', en: 'Full name' },
    location: { id: 'Domisili', en: 'Location' },
    role: { id: 'Spesialisasi', en: 'Specialisation' },
    status: { id: 'Status', en: 'Status' },
  },
  downloadCv: { id: 'Unduh CV', en: 'Download CV' },
  marquee: {
    id: ['ANALISIS SISTEM', 'PENGEMBANGAN WEB', 'JARINGAN KOMPUTER', 'BASIS DATA'],
    en: ['SYSTEM ANALYSIS', 'WEB DEVELOPMENT', 'COMPUTER NETWORKS', 'DATABASE DESIGN'],
  },
  projectsTag: { id: '02 · Karya', en: '02 · Works' },
  projectsTitle: [{ id: 'PROYEK', en: 'SELECTED' }, { id: 'PILIHAN', en: 'WORKS' }],
  viewCase: { id: 'Lihat detail', en: 'View case' },
  visit: { id: 'Kunjungi situs', en: 'Visit site' },
  source: { id: 'Kode sumber', en: 'Source code' },
  close: { id: 'Tutup', en: 'Close' },
  expTag: { id: '03 · Perjalanan', en: '03 · Journey' },
  expTitle: [{ id: 'PENGALAMAN', en: 'EXPERIENCE' }, { id: '& PENDIDIKAN', en: '& EDUCATION' }],
  eduLabel: { id: 'Pendidikan', en: 'Education' },
  gpa: { id: 'IPK', en: 'GPA' },
  certTag: { id: '04 · Sertifikasi', en: '04 · Certification' },
  certTitle: [{ id: 'LISENSI &', en: 'LICENSES &' }, { id: 'SERTIFIKAT', en: 'CREDENTIALS' }],
  certNo: { id: 'No. sertifikat', en: 'Certificate no.' },
  verify: { id: 'Lihat sertifikat', en: 'View certificate' },
  certHint: { id: 'Geser, klik kartu, atau pakai tombol panah', en: 'Swipe, click a card, or use the arrows' },
  contactTag: { id: '05 · Mari terhubung', en: '05 · Get in touch' },
  contactTitle: [
    { id: 'MARI BANGUN', en: "LET'S BUILD" },
    { id: 'SESUATU', en: 'SOMETHING' },
    { id: 'YANG HEBAT.', en: 'GREAT.' },
  ],
  socials: { id: 'Media sosial', en: 'Socials' },
  details: { id: 'Kontak', en: 'Contact details' },
  localTime: { id: 'Waktu setempat', en: 'Local time' },
  copy: { id: 'Hak cipta dilindungi.', en: 'All rights reserved.' },
  built: { id: 'Dibangun dengan React', en: 'Built with React' },
  backTop: { id: 'Kembali ke atas', en: 'Back to top' },
  prevSection: { id: 'Bagian sebelumnya', en: 'Previous section' },
  nextSection: { id: 'Bagian berikutnya', en: 'Next section' },
};
