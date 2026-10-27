import { useEffect, useState } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { TbArrowUp, TbMapPin } from 'react-icons/tb';
import { profile, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import Reveal from './Reveal.jsx';
import { socialLinks } from './SideRails.jsx';

// Jam waktu Indonesia Barat yang berjalan setiap detik
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour12: false });
}

export default function Contact() {
  const { t } = useLang();
  const time = useClock();
  const c = profile.contact;
  const links = [
    ...socialLinks().filter((s) => s.key !== 'email'),
    c.whatsapp && { key: 'wa', label: 'WhatsApp', href: `https://wa.me/${c.whatsapp}`, Icon: SiWhatsapp },
  ].filter(Boolean);

  return (
    <section id="contact" className="contact dark">
      <div className="wrap">
        <Reveal className="contact-title">
          <span className="sec-tag">[ {t(ui.contactTag)} ]</span>
          <h2>
            <span>{t(ui.contactTitle[0])}</span>
            <span className="accent">{t(ui.contactTitle[1])}</span>
            <span>{t(ui.contactTitle[2])}</span>
          </h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.05}>
            <h3 className="mini">{t(ui.socials)}</h3>
            <ul className="social-list">
              {links.map(({ key, label, href, Icon }) => (
                <li key={key}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mini">{t(ui.details)}</h3>
            <a className="contact-email" href={`mailto:${c.email}`}>
              {c.email}
            </a>
            <p className="contact-line">
              <TbMapPin /> {t(profile.location)}, Indonesia
            </p>
            <p className="contact-line">{t(c.availability)}</p>
          </Reveal>

          <Reveal delay={0.15} className="contact-time">
            <h3 className="mini">{t(ui.localTime)}</h3>
            <p className="clock">
              {time}
              <small>WIB</small>
            </p>
            <button
              type="button"
              className="to-top"
              aria-label={t(ui.backTop)}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <TbArrowUp />
            </button>
          </Reveal>
        </div>

        <footer className="foot">
          <span>
            © {new Date().getFullYear()} {profile.nameFull}. {t(ui.copy)}
          </span>
          <span>{t(ui.built)}</span>
        </footer>
      </div>
    </section>
  );
}
