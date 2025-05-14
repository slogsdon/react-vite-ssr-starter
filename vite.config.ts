import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import mdPlugin from 'vite-plugin-md'
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // mdPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
