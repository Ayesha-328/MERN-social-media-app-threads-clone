import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    // to get rid of the cors errors
    proxy:{
      "/api" : {
        target : "https://mern-social-media-app-threads-clone.vercel.app",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
