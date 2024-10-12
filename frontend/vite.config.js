import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/',
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom', 'lodash'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  },

  assetsInclude: [
    '**/*.png',
    '**/*.PNG',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.gif',
    '**/*.WEBP',
    '**/*.webp'
  ],
  server: {
    host: true,
    port: 5173,
    open: true,
    hmr: {
      overlay: false,
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lodash'
    ],
  },
  define: {
    'process.env': {}
  },
  publicDir: 'public',
});