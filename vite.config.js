// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => ({
  base: command === 'build' && mode === 'github'
    ? '/portfolio-page/'  // para GitHub Pages
    : '/',                // para Netlify y local
  plugins: [react()],
}))
