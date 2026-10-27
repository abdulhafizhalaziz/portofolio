/* Mengetahui bagian (section) mana yang sedang terlihat di layar. */
import { useEffect, useState } from 'react';

export const SECTIONS = ['home', 'about', 'projects', 'experience', 'certificates', 'contact'];

export function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.45; // garis bantu di 45% tinggi layar
      let current = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Hero menempel (sticky), jadi pakai posisi gulir untuk mendeteksi bagian paling atas
      if (window.scrollY < window.innerHeight * 0.4) current = 'home';
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return active;
}

export function scrollToSection(id) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
