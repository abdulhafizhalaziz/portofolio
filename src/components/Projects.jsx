import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TbArrowUpRight, TbBrandGithub, TbExternalLink, TbX } from 'react-icons/tb';
import { projects, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import SectionTitle from './SectionTitle.jsx';
import Reveal from './Reveal.jsx';
import ProjectArt from './ProjectArt.jsx';

function Thumb({ p }) {
  const { t } = useLang();
  const [ok, setOk] = useState(Boolean(p.image));
  return ok ? (
    <img src={p.image} alt={t(p.title)} loading="lazy" onError={() => setOk(false)} />
  ) : (
    <ProjectArt variant={p.key} />
  );
}

export default function Projects() {
  const { t } = useLang();
  const [open, setOpen] = useState(null);

  // Tutup pop-up dengan tombol Esc dan kunci gulir halaman saat terbuka
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <section id="projects" className="projects dark">
      <div className="wrap">
        <SectionTitle tag={ui.projectsTag} lines={ui.projectsTitle} italic dark />

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.key} delay={0.08 * i} className={`project-card${i === 0 ? ' is-wide' : ''}`}>
              <button type="button" className="project-hit" onClick={() => setOpen(p)}>
                <div className="project-media">
                  <Thumb p={p} />
                </div>
                <div className="project-body">
                  <span className="project-meta">
                    {t(p.type)} · {p.year}
                  </span>
                  <h3>{t(p.title)}</h3>
                  <span className="project-more">
                    {t(ui.viewCase)} <TbArrowUpRight />
                  </span>
                </div>
                <span className="project-bar" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={t(open.title)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(null)}
          >
            <motion.div
              className="modal-box"
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" className="modal-close" onClick={() => setOpen(null)} aria-label={t(ui.close)}>
                <TbX />
              </button>
              <div className="modal-media">
                <Thumb p={open} />
              </div>
              <div className="modal-body">
                <span className="project-meta">
                  {t(open.type)} · {open.year}
                </span>
                <h3>{t(open.title)}</h3>
                <p>{t(open.summary)}</p>
                <ul>
                  {t(open.points).map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tags">
                  {open.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="modal-links">
                  {open.live && (
                    <a className="btn-accent" href={open.live} target="_blank" rel="noopener noreferrer">
                      {t(ui.visit)} <TbExternalLink />
                    </a>
                  )}
                  {open.repo && (
                    <a className="btn-outline" href={open.repo} target="_blank" rel="noopener noreferrer">
                      {t(ui.source)} <TbBrandGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
