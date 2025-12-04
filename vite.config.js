import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard Vite + React config; Tailwind is handled via PostCSS and `tailwind.config.js`
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
