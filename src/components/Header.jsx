import { useEffect, useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';
import { profile, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import { scrollToSection } from '../hooks/useActiveSection.js';

const LINKS = ['home', 'about', 'projects', 'experience', 'certificates', 'contact'];

export default function Header({ active }) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Saat menu HP terbuka: kunci gulir halaman dan tutup dengan tombol Esc
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 980 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`hdr${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <a href="#home" className="logo" onClick={go('home')} aria-label={profile.nameFull}>
        {profile.logo.main}
        <span>{profile.logo.accent}</span>
      </a>

      <nav className="nav" aria-label="Navigasi utama">
        {LINKS.map((id) => (
          <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''}>
            {t(ui.nav[id])}
          </a>
        ))}
      </nav>

      <div className="hdr-actions">
        <div className="lang" role="group" aria-label="Bahasa / Language">
          {['id', 'en'].map((l) => (
            <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a href="#contact" className="btn-outline" onClick={go('contact')}>
          {t(ui.contactBtn)}
        </a>
        <button
          type="button"
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <TbX /> : <TbMenu2 />}
        </button>
      </div>
    </header>
  );
}
