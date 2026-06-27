import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  // Keep built assets relative so the portfolio works at a subpath (for example
  // GitHub Pages' /info/portfolio/) as well as at a custom-domain root.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        customerSupportCopilot: resolve(__dirname, 'case-studies/customer-support-copilot/index.html'),
        aiAccountingPlatform: resolve(__dirname, 'case-studies/ai-accounting-platform/index.html'),
        workforceSchedulingSystem: resolve(__dirname, 'case-studies/workforce-scheduling-system/index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
            return 'react';
          }
          return undefined;
        },
      },
    },
  },
  server: {
    host: true,
  },
});
