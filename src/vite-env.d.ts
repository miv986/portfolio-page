/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_PATH: string
    // puedes añadir más VITE_... si lo necesitas
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  