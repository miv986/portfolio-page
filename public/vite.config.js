import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detecta si estás haciendo build para GitHub Pages
const isGitHubPages = process.env.DEPLOY_ENV === 'github';

export default defineConfig({
  base: isGitHubPages ? '/portfolio-page/' : './', // usa /portfolio-page/ solo en GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
});
