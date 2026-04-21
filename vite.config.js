import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    open: true, // ✅ automatically opens browser on dev start
    port: 5173, // ✅ optional — change if you want a fixed port
  },
  build: {
    outDir: 'dist', // ✅ default build folder
    sourcemap: true, // optional but helpful for debugging
  },
});
