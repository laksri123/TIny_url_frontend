import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: true,  // allow all hosts in dev
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: true,  // allow Render preview host
    port: 10000
  }
});
