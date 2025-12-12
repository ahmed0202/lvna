// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // ------------------------------------
  // Add the 'server' configuration here:
  server: {
    port: 3300, // <--- This sets the development server port
  },
  // ------------------------------------
});
