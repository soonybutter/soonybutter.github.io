import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',                 // ← 그대로 두기
  build: { outDir: 'docs' }  // ← dist 대신 docs로 빌드
})