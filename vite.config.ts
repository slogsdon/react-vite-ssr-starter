import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin, { Mode } from "vite-plugin-markdown";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    mdPlugin({
      mode: [Mode.HTML, Mode.TOC, Mode.REACT],
    }),
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
