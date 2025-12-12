// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: "gzip", // You can also use 'gzip'
      ext: ".gz", // Change to '.gz' if using gzip
      threshold: 10240, // Only assets bigger than this size are compressed
      deleteOriginalAssets: false, // Keep original files
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
      chunkSizeWarningLimit: 1000, // Adjust this value as needed
    },
  },
  // --- Development Server Configuration ---
  server: {
    port: 3300, // <--- Development server port
    host: true,
  },
  // --- Production Preview Configuration ---
  preview: {
    host: true,

    port: 3300, // <--- Production *preview* server port (for 'vite preview')
    allowedHosts: ["yiwu-lvna.com", "www.yiwu-lvna.com"],
  },
});
