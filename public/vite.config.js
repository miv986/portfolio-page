import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-page/',
  build: {
    outDir: 'docs',  // <-- aquí cambias de dist a docs
  },
  server: {
    host: 'localhost', // <-- clave
    port: 5173,         // opcional, puedes cambiarlo si el puerto está ocupado
    strictPort: true    // lanza error si el puerto está ocupado (útil para depurar)
  }
})
