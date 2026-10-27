/* Judul bagian: label kecil [ 01 · Profil ] + judul besar dua baris (baris 2 berwarna aksen). */
import Reveal from './Reveal.jsx';
import { useLang } from '../hooks/useLang.jsx';

export default function SectionTitle({ tag, lines, italic = false, dark = false }) {
  const { t } = useLang();
  return (
    <Reveal className={`sec-title${dark ? ' is-dark' : ''}`}>
      <span className="sec-tag">[ {t(tag)} ]</span>
      <h2>
        <span>{t(lines[0])}</span>
        <span className={`accent${italic ? ' slant' : ''}`}>{t(lines[1])}</span>
      </h2>
    </Reveal>
  );
}
