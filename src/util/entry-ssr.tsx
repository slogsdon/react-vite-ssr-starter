// This file serves as the entry point for server-side rendering (SSR).
// It renders the React application to a string using React's server-side rendering APIs.

import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { App } from "@/App";

export async function render(url: string) {
  // Render the React application to a string with the given URL.
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
