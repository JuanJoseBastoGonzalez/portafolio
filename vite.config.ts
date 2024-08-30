import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Reemplaza 'nombre-repo' con el nombre de tu repositorio
const base = '/nombre-repo/';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'docs', // Configura la carpeta de salida a 'docs'
  },
  base, // Configura la base de URL para GitHub Pages
});
