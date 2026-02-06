import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        search: resolve(__dirname, 'search.html'),
        tools: resolve(__dirname, 'tools.html')
      },
      output: {
        manualChunks: {
          'vendor': ['@google/generative-ai'],
          'ui': ['./src/modules/ui-components.js'],
          'security': ['./src/modules/security-tools.js'],
          'data': ['./src/data/knowledge-base.js']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  optimizeDeps: {
    include: ['@google/generative-ai']
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none'
  }
});
