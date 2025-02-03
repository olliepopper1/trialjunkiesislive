import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic'
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist/client',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});
