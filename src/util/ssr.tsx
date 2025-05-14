// This file is responsible for server-side rendering (SSR) and static site generation (SSG).
// It uses Vite's middleware mode to dynamically render and generate HTML files for predefined routes.
// The generated files are saved in the 'build' directory for deployment.

import { createServer } from "vite";
import fs from "fs";
import path from "path";

async function render() {
  // Create a Vite server instance in middleware mode.
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // Define the routes for which static HTML files will be generated.
  const routes = [
    "/",
    "/about",
    "/markdown",
    "/dashboard/overview",
    "/dashboard/settings",
  ];

  for (const route of routes) {
    const url = route === "/" ? "/" : route;

    // Read the HTML template from the build directory.
    const templatePath = path.resolve(__dirname, "../../build/index.html");
    const template = fs.readFileSync(templatePath, "utf-8");

    // Load the SSR entry module to render the React app.
    const appPath = path.resolve(__dirname, "./entry-ssr.tsx");
    const { render } = await vite.ssrLoadModule(appPath);

    // Render the React app to a string for the current route.
    const html = await render(url);
    const finalHtml = template.replace("<!--app-->", html);

    // Determine the output directory for the current route.
    const outDir = path.join(
      __dirname,
      "../../build",
      route === "/" ? "" : route,
    );
    fs.mkdirSync(outDir, { recursive: true });

    // Write the rendered HTML to the output directory.
    fs.writeFileSync(path.join(outDir, "index.html"), finalHtml);
  }

  // Close the Vite server instance.
  await vite.close();
}

// Execute the render function to generate static files.
render();
