import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test-digital-element/',
  css: {
    preprocessorOptions: {
      scss: {
        // Additional SCSS options if needed
      }
    }
  }
});