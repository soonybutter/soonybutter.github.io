import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: If your repository name is NOT "portfolio",
// change the base to `"/<your-repo-name>/"`.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist"
  },
})