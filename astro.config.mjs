import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  server: { port: 3000 },
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
