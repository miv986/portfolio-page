import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detecta si estás haciendo build para GitHub Pages
const isGitHubPages = process.env.DEPLOY_ENV === 'github';

export default defineConfig({
  base: isGitHubPages ? '/portfolio-page/' : '/', // usa /portfolio-page/ solo en GitHub Pages
  define: {
    'import.meta.env.VITE_BASE_PATH': JSON.stringify(
      isGitHubPages ? '/portfolio-page' : ''
    ),
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
});
