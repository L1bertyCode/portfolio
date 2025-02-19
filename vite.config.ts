import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import svgr from "vite-plugin-svgr";


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), svgr(
    {
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    })
  ],
  server: {
    port: 3200
  }
});
