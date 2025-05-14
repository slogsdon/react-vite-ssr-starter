// This file sets up a development server using Express and Vite.
// It enables server-side rendering (SSR) during development and serves the application dynamically.

import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

async function startDevServer() {
  const app = express();

  // Create a Vite server instance in middleware mode.
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // Use Vite's middleware to handle requests.
  app.use(vite.middlewares);

  // Handle all other requests for SSR.
  app.use(async (req, res) => {
    try {
      const url = req.originalUrl;

      // Read and transform the HTML template.
      let template = fs.readFileSync(
        path.resolve(__dirname, "../../index.html"),
        "utf-8",
      );
      template = await vite.transformIndexHtml(url, template);

      // Load the SSR entry module and render the app.
      const { render } = await vite.ssrLoadModule("/src/util/entry-ssr.tsx");
      const appHtml = await render(url);

      // Inject the rendered app HTML into the template.
      const html = template.replace("<!--app-->", appHtml);

      // Send the final HTML to the client.
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e: any) {
      // Handle errors and fix stack traces for SSR.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  // Start the development server on port 5173.
  app.listen(5173, () => {
    console.log("Dev SSR server running at http://localhost:5173");
  });
}

// Start the development server.
startDevServer();
