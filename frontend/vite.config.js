import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['tiny-url-frontend-6.onrender.com'], // 👈 ADD THIS
  },
  preview: {
    host: true,
    allowedHosts: ['tiny-url-frontend-6.onrender.com'], // 👈 AND THIS
  }
});
