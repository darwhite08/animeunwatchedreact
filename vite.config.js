import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend URL
        changeOrigin: true,
        secure: false,
      }, 
      '/frontend': {
        target: 'http://localhost:5173/', // Your backend URL
        changeOrigin: true,
        secure: false,
      }, 
      '/bestanimelist': {
        target: 'http://localhost:3000', // Your backend URL
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
