import { TbBriefcase, TbSchool } from 'react-icons/tb';
import { education, experience, ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import SectionTitle from './SectionTitle.jsx';
import Reveal from './Reveal.jsx';

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="experience">
      <div className="wrap exp-grid">
        <div>
          <SectionTitle tag={ui.expTag} lines={ui.expTitle} />
          <Reveal delay={0.1} className="edu-card">
            <span className="edu-label">
              <TbSchool /> {t(ui.eduLabel)}
            </span>
            <h3>{education.school}</h3>
            <p>{t(education.degree)}</p>
            <div className="edu-meta">
              <span>{education.period}</span>
              <span>
                {t(ui.gpa)} {t(education.gpa)}
              </span>
              <span>{education.place}</span>
            </div>
          </Reveal>
        </div>

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={i} delay={0.1 * i}>
              <span className="tl-dot">
                <TbBriefcase />
              </span>
              <span className="tl-period">{t(job.period)}</span>
              <h3>{t(job.role)}</h3>
              <p className="tl-org">{t(job.org)}</p>
              <ul>
                {t(job.points).map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
