import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/api": {
				target: "http://localhost:5000",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
=======
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
>>>>>>> d1ea470bcc1bf15b57781169efb287c452696049
