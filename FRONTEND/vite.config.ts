import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
   // outDir: '../CM-Backend/static',  // Chemin vers le dossier statique de Django   
    rollupOptions: {
      input: "./src/assets/main.tsx",
    }
  },
  plugins: [react()],
  server: {
    host: 'ec2-16-171-173-230.eu-north-1.compute.amazonaws.com',
    port: 5173,
    },
})
