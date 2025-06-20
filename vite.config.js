import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  base: "/3d-react-portfolio",
  optimizeDeps: {
    include: ['typed.js'],  // <-- Add this line
  },
})
