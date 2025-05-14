import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";
import fs from "fs";
import path from "path";

const routes = [
  "/",
  "/about",
  // "/markdown",
  "/dashboard/overview",
  "/dashboard/settings",
];

routes.forEach((route) => {
  const html = renderToString(
    <StaticRouter location={route}>
      <App />
    </StaticRouter>,
  );

  const template = fs.readFileSync(
    path.resolve(__dirname, "../build/index.html"),
    "utf-8",
  );
  const finalHtml = template.replace("<!--app-->", html);

  const outDir = path.join(__dirname, "../build", route === "/" ? "" : route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), finalHtml);
});
