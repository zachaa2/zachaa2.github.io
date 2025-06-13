import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://zachaa2.github.io',
      // list all routes to be in the sitemap
      dynamicRoutes: ['/resume']
    })
  ],
})
