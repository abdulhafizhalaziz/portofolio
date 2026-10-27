import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // './' = alamat relatif, jadi situs bisa dibuka di subfolder (mis. localhost/portfolio-hafizh)
  // maupun di root domain (Vercel).
  base: './',
  plugins: [react()],
});
