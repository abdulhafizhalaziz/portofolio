import { TbDownload } from 'react-icons/tb';
import { profile, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import SectionTitle from './SectionTitle.jsx';
import Reveal from './Reveal.jsx';
import Skills from './Skills.jsx';

export default function About() {
  const { t } = useLang();
  const info = [
    [ui.info.name, profile.nameFull],
    [ui.info.location, t(profile.location)],
    [ui.info.role, t(profile.role)],
    [ui.info.status, t(profile.status)],
  ];

  return (
    <section id="about" className="about">
      <div className="about-watermark" aria-hidden="true">{profile.nameShort}</div>
      <div className="wrap about-grid">
        <div className="about-side">
          <SectionTitle tag={ui.aboutTag} lines={ui.aboutTitle} />
          <Reveal delay={0.1}>
            <dl className="info-list">
              {info.map(([label, value]) => (
                <div key={label.id}>
                  <dt>{t(label)}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <a className="btn-dark" href={t(profile.cv)} download>
              {t(ui.downloadCv)} <TbDownload />
            </a>
          </Reveal>
        </div>

        <div className="about-main">
          <Reveal as="p" className="about-text" delay={0.15}>
            {t(profile.about)}
          </Reveal>
          <Skills />
        </div>
      </div>
    </section>
  );
}
