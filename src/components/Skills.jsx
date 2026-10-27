/* Kartu keahlian: ikon abu-abu, berubah warna saat kartu disorot. */
import {
  SiCanva, SiCisco, SiCss3, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript,
  SiMikrotik, SiMysql, SiOracle, SiPhp, SiUml, SiMicrosoftsqlserver,
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import {
  TbApi, TbBrain, TbBulb, TbChartDots3, TbClock, TbDatabase, TbFileText, TbLanguage,
  TbMessages, TbNetwork, TbRouter, TbSitemap, TbUsers, TbClipboardList,
} from 'react-icons/tb';
import { skillGroups, skillLabelsEn } from '../data/profile.js';
import { useLang } from '../hooks/useLang.jsx';
import Reveal from './Reveal.jsx';

// Ikon + warna untuk setiap keahlian (tambahkan di sini jika menambah keahlian baru)
const ICONS = {
  HTML5: [SiHtml5, '#e34f26'],
  CSS3: [SiCss3, '#1572b6'],
  JavaScript: [SiJavascript, '#e5b700'],
  PHP: [SiPhp, '#777bb4'],
  MySQL: [SiMysql, '#00758f'],
  'REST API': [TbApi, '#e11d2e'],
  MikroTik: [SiMikrotik, '#293239'],
  'Cisco Packet Tracer': [SiCisco, '#1ba0d7'],
  VLAN: [TbSitemap, '#0f766e'],
  'TCP/IP': [TbNetwork, '#2563eb'],
  Troubleshooting: [TbRouter, '#ea580c'],
  'Proses Bisnis': [TbChartDots3, '#7c3aed'],
  UML: [SiUml, '#a32cc4'],
  'Basis Data': [TbDatabase, '#0891b2'],
  'Analisis Kebutuhan': [TbClipboardList, '#16a34a'],
  Oracle: [SiOracle, '#f80000'],
  'SQL Server': [SiMicrosoftsqlserver, '#cc2927'],
  Git: [SiGit, '#f05032'],
  GitHub: [SiGithub, '#181717'],
  'VS Code': [VscVscode, '#007acc'],
  'Microsoft Office': [FaMicrosoft, '#d83b01'],
  Figma: [SiFigma, '#a259ff'],
  Canva: [SiCanva, '#00c4cc'],
  'Pemecahan Masalah': [TbBulb, '#e5b700'],
  'Berpikir Analitis': [TbBrain, '#db2777'],
  Komunikasi: [TbMessages, '#2563eb'],
  'Kerja Tim': [TbUsers, '#16a34a'],
  'Manajemen Waktu': [TbClock, '#ea580c'],
  'Dokumentasi Teknis': [TbFileText, '#475569'],
  'Bahasa Inggris': [TbLanguage, '#0f766e'],
};

export default function Skills() {
  const { lang, t } = useLang();

  return (
    <div className="skills">
      {skillGroups.map((g, i) => (
        <Reveal key={g.key} delay={0.05 * i} className={`skill-card skill-${g.key}`}>
          <h3>{t(g.title)}</h3>
          <ul>
            {g.items.map((name) => {
              const [Icon, color] = ICONS[name] || [TbBulb, '#e11d2e'];
              const label = lang === 'en' ? skillLabelsEn[name] || name : name;
              return (
                <li key={name} style={{ '--c': color }}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
