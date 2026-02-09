import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    target: 'es2022',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        search: resolve(__dirname, 'search.html'),
        tools: resolve(__dirname, 'tools.html'),
        threats: resolve(__dirname, 'threats.html'),
        threatMap: resolve(__dirname, 'threat-map.html'),
        learning: resolve(__dirname, 'learning.html'),
        frameworks: resolve(__dirname, 'frameworks.html'),
        chatbot: resolve(__dirname, 'chatbot.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        community: resolve(__dirname, 'community.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        terms: resolve(__dirname, 'terms-of-service.html')
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.js')) {
            return '[name].[ext]';
          }
          return 'assets/[ext]/[name]-[hash].[ext]';
        }
      }
    },
    assetsInlineLimit: 0,
    copyPublicDir: true,
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['@google/generative-ai']
  },
  esbuild: {
    target: 'es2022',
    legalComments: 'none'
  }
});
