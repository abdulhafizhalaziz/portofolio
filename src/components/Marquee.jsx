/* Pita miring berisi kata kunci yang terus bergeser. */
import { ui } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';

export default function Marquee() {
  const { t } = useLang();
  const words = t(ui.marquee);
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-group">
            {row.map((w, i) => (
              <span key={`${k}-${i}`}>
                {w}
                <i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
