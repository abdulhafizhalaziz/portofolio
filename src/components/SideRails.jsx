/* Ikon media sosial di kiri + tombol naik/turun antar bagian di kanan. */
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { TbChevronDown, TbChevronUp, TbMail } from 'react-icons/tb';
import { profile, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import { SECTIONS, scrollToSection } from '../hooks/useActiveSection.js';

export function socialLinks() {
  const c = profile.contact;
  return [
    c.linkedin && { key: 'linkedin', label: 'LinkedIn', href: c.linkedin, Icon: SiLinkedin },
    c.github && { key: 'github', label: 'GitHub', href: c.github, Icon: SiGithub },
    c.instagram && { key: 'instagram', label: 'Instagram', href: c.instagram, Icon: SiInstagram },
    { key: 'email', label: 'Email', href: `mailto:${c.email}`, Icon: TbMail },
  ].filter(Boolean);
}

export default function SideRails({ active }) {
  const { t } = useLang();
  const i = Math.max(0, SECTIONS.indexOf(active));

  return (
    <>
      <ul className={`rail-left${active === 'home' ? '' : ' is-hidden'}`}>
        {socialLinks().map(({ key, label, href, Icon }) => (
          <li key={key}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      <div className="rail-right">
        <button
          type="button"
          aria-label={t(ui.prevSection)}
          disabled={i === 0}
          onClick={() => scrollToSection(SECTIONS[i - 1])}
        >
          <TbChevronUp />
        </button>
        <button
          type="button"
          aria-label={t(ui.nextSection)}
          disabled={i === SECTIONS.length - 1}
          onClick={() => scrollToSection(SECTIONS[i + 1])}
        >
          <TbChevronDown />
        </button>
      </div>
    </>
  );
}
