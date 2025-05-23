import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    proxy: {
      "/api": {
        target: "https://dev.backend.4dnum.com",
        changeOrigin: true,
        secure: false, // Set to false if using self-signed SSL
      },
      "/s3": {
        target: 'https://fdnum-web-dev.devtoz.com',
        changeOrigin: true,
        secure: false,
      }
    },
  },
});
