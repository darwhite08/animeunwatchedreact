import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
      '/api/blog': {
        target: 'http://localhost:3000', // Ensure this is correctly targeting your backend
        changeOrigin: true,
        secure: false,
      },
      '/api/bestanimelist': {
        target: 'http://localhost:3000', // Ensure this is correctly targeting your backend
        changeOrigin: false,
        secure: false,
      }
    }
  }
})
