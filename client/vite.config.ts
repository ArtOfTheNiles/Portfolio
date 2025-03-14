import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  }
  },
  resolve:{
    alias: {
      '@/styles': path.resolve(__dirname, './src/assets/styles'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/icons': path.resolve(__dirname, './public/icons'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
    }
  }
})
