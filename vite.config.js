import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/test-digital-element/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        contact: resolve(process.cwd(), 'contact-us.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Additional SCSS options if needed
      }
    }
  }
});