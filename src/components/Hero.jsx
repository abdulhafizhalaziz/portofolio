/* Halaman pembuka: nama besar, teks bergerak, foto, dan latar merah berpendar. */
import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { profile, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';

// Titik-titik merah yang melayang di latar (posisi tetap supaya tidak berubah tiap render)
const SPARKS = [
  [12, 30, 0], [22, 70, 1.5], [35, 18, 3], [48, 80, 0.8], [63, 25, 2.2],
  [74, 62, 4], [86, 35, 1.1], [91, 75, 2.8], [8, 85, 3.6], [55, 50, 5],
];

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [photoOk, setPhotoOk] = useState(true);

  // Saat digulir, isi hero mengecil dan memudar sementara bagian About naik menutupinya
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  const slide = `${profile.nameSlide} · `.repeat(4);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="sparks" aria-hidden="true">
        {SPARKS.map(([x, y, d], i) => (
          <span key={i} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }} />
        ))}
      </div>

      <motion.div className="hero-inner" style={reduce ? undefined : { scale, opacity }}>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.nameShort}
          <span className="sr-only"> — {profile.nameFull}</span>
        </motion.h1>

        <div className="hero-slide" aria-hidden="true">
          <div className="hero-slide-track">
            <span>{slide}</span>
            <span>{slide}</span>
          </div>
        </div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {photoOk ? (
            <img src={profile.photo} alt={profile.nameFull} onError={() => setPhotoOk(false)} />
          ) : (
            // Tampil jika public/images/foto.png belum ada
            <div className="hero-monogram" aria-label={profile.nameFull}>
              <span>AH</span>
            </div>
          )}
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="hero-role">{t(profile.role)}</p>
          <p className="hero-tag">{t(profile.heroTag)}</p>
        </motion.div>
      </motion.div>

      <div className="scroll-hint" aria-hidden="true">
        <span>{t(ui.scroll)}</span>
        <i />
      </div>
    </section>
  );
}
