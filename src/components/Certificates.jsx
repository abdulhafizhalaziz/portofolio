/* Karusel sertifikat 3D: kartu tengah besar, kiri-kanan miring ke belakang. */
import { useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TbCertificate, TbChevronLeft, TbChevronRight, TbExternalLink } from 'react-icons/tb';
import { certificates, profile, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function Certificates() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const n = certificates.length;

  const go = useCallback((i) => setIndex(((i % n) + n) % n), [n]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <section id="certificates" className="certs dark">
      <div className="wrap">
        <SectionTitle tag={ui.certTag} lines={ui.certTitle} italic dark />
      </div>

      <div
        className="coverflow"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={t(ui.nav.certificates)}
        onKeyDown={onKey}
      >
        <motion.div
          className="coverflow-stage"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(index + 1);
            else if (info.offset.x > 60) go(index - 1);
          }}
        >
          {certificates.map((c, i) => {
            // Jarak kartu dari kartu aktif (dibuat melingkar)
            let d = i - index;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const abs = Math.abs(d);
            const hidden = abs > 2;
            return (
              <motion.article
                key={c.number}
                className={`cert${d === 0 ? ' is-active' : ''}`}
                aria-hidden={d !== 0}
                onClick={() => d !== 0 && go(i)}
                animate={{
                  x: `${d * 62}%`,
                  rotateY: reduce ? 0 : d * -32,
                  scale: d === 0 ? 1 : 0.8 - (abs - 1) * 0.08,
                  opacity: hidden ? 0 : d === 0 ? 1 : 0.55 - (abs - 1) * 0.25,
                  zIndex: 10 - abs,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                style={{ pointerEvents: hidden ? 'none' : 'auto' }}
              >
                <div className="cert-paper">
                  <div className="cert-top">
                    <TbCertificate />
                    <span>{c.issuer}</span>
                  </div>
                  <p className="cert-kicker">{t({ id: 'Sertifikat Kompetensi', en: 'Certificate of Competence' })}</p>
                  <h3>{t(c.title)}</h3>
                  <p className="cert-to">{t({ id: 'Diberikan kepada', en: 'Awarded to' })}</p>
                  <p className="cert-name">{profile.nameFull}</p>
                  <div className="cert-foot">
                    <span>
                      {t(ui.certNo)}
                      <b>{c.number}</b>
                    </span>
                    <span className={`cert-seal${c.featured ? ' is-gold' : ''}`} aria-hidden="true" />
                  </div>
                </div>
                <div className="cert-caption">
                  <h4>{t(c.title)}</h4>
                  <p>
                    {t(c.issued)}
                    {c.valid && ` · ${t(c.valid)}`}
                  </p>
                  {d === 0 && c.link && (
                    <a href={c.link} target="_blank" rel="noopener noreferrer">
                      {t(ui.verify)} <TbExternalLink />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="coverflow-ctrl">
          <button type="button" onClick={() => go(index - 1)} aria-label="Sebelumnya">
            <TbChevronLeft />
          </button>
          <div className="dots">
            {certificates.map((c, i) => (
              <button
                key={c.number}
                type="button"
                aria-label={`${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(index + 1)} aria-label="Berikutnya">
            <TbChevronRight />
          </button>
        </div>
        <p className="coverflow-hint">{t(ui.certHint)}</p>
      </div>
    </section>
  );
}
