// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // --- Development Server Configuration ---
  server: {
    port: 3300, // <--- Development server port
  },
  // --- Production Preview Configuration ---
  preview: {
    port: 3300, // <--- Production *preview* server port (for 'vite preview')
  },
});
