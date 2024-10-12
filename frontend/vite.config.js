import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  server: {
    open: true
  },
  build: {
    sourcemap: true
  }
  // esbuild.jsxInject qatorini olib tashladik
})