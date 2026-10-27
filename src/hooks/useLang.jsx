/* Bahasa situs (ID / EN). Pilihan disimpan di browser pengunjung. */
import { createContext, useContext, useEffect, useState } from 'react';

const KEY = 'portfolio-lang';
const LangContext = createContext({ lang: 'id', setLang: () => {}, t: (v) => v });

function readSaved() {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'en' || v === 'id' ? v : 'id';
  } catch {
    return 'id';
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readSaved);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(KEY, lang);
    } catch {
      /* abaikan (mode privat) */
    }
  }, [lang]);

  // t({ id, en }) -> teks sesuai bahasa; string biasa dikembalikan apa adanya
  const t = (v) => (v && typeof v === 'object' && 'id' in v ? v[lang] ?? v.id : v);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
