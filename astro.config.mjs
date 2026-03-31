// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    quality: 90,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});