/* Gambar ilustrasi otomatis untuk proyek yang belum punya screenshot. */
export default function ProjectArt({ variant }) {
  if (variant === 'pos') {
    return (
      <svg className="project-art" viewBox="0 0 640 400" role="img" aria-label="Ilustrasi aplikasi kasir">
        <rect width="640" height="400" fill="#f4f4f5" />
        <rect x="0" y="0" width="120" height="400" fill="#18181b" />
        {[60, 100, 140, 180].map((y) => (
          <rect key={y} x="24" y={y} width="72" height="10" rx="5" fill="#3f3f46" />
        ))}
        <rect x="24" y="24" width="48" height="14" rx="4" fill="#e11d2e" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={148 + i * 120} y="28" width="104" height="64" rx="10" fill="#fff" />
            <rect x={160 + i * 120} y="42" width="44" height="8" rx="4" fill="#d4d4d8" />
            <rect x={160 + i * 120} y="62" width="68" height="16" rx="5" fill={i === 1 ? '#e11d2e' : '#27272a'} />
          </g>
        ))}
        <rect x="148" y="112" width="464" height="260" rx="12" fill="#fff" />
        {[140, 176, 212, 248, 284, 320].map((y, i) => (
          <g key={y}>
            <rect x="168" y={y} width="150" height="10" rx="5" fill="#e4e4e7" />
            <rect x="350" y={y} width="60" height="10" rx="5" fill="#e4e4e7" />
            <rect x="520" y={y} width="72" height="10" rx="5" fill={i % 3 === 0 ? '#fca5a5' : '#d4d4d8'} />
          </g>
        ))}
      </svg>
    );
  }
  // Pariwisata
  return (
    <svg className="project-art" viewBox="0 0 640 400" role="img" aria-label="Ilustrasi situs pariwisata">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#sky)" />
      <circle cx="470" cy="120" r="46" fill="#fff7ed" opacity="0.9" />
      <path d="M0 290 L140 170 L240 260 L340 150 L470 280 L560 210 L640 260 L640 400 L0 400 Z" fill="#14532d" />
      <path d="M0 330 L120 270 L260 320 L400 250 L640 330 L640 400 L0 400 Z" fill="#166534" />
      <rect x="0" y="0" width="640" height="44" fill="rgba(0,0,0,0.35)" />
      <rect x="24" y="15" width="90" height="14" rx="4" fill="#fff" />
      {[420, 480, 540].map((x) => (
        <rect key={x} x={x} y="17" width="44" height="10" rx="5" fill="rgba(255,255,255,0.8)" />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={40 + i * 196} y="300" width="168" height="76" rx="12" fill="#fff" />
          <rect x={52 + i * 196} y="312" width="56" height="52" rx="8" fill={['#0ea5e9', '#22c55e', '#f97316'][i]} />
          <rect x={118 + i * 196} y="318" width="76" height="10" rx="5" fill="#a1a1aa" />
          <rect x={118 + i * 196} y="338" width="52" height="8" rx="4" fill="#d4d4d8" />
        </g>
      ))}
    </svg>
  );
}
