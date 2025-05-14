// This is the Vite configuration file for the project.
// It defines plugins, build options, and module resolution settings.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin, { Mode } from "vite-plugin-markdown";
import path from "path";

export default defineConfig({
  // Plugins used by Vite, including React and Markdown support.
  plugins: [
    react(),
    mdPlugin({
      mode: [Mode.HTML, Mode.TOC, Mode.REACT], // Enable multiple Markdown modes.
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' to the 'src' directory.
    },
  },
  build: {
    outDir: "build", // Output directory for the build files.
    rollupOptions: {
      input: "./index.html", // Entry point for the build process.
    },
  },
});
