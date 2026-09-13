import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deployed at https://heshagamage.github.io/ — a user page, so the site
// lives at the domain root and base stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
