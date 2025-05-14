// This is the entry point for the client-side application.
// It hydrates the React application on the client using React DOM.

import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/App";

hydrateRoot(
  document.getElementById("root")!, // Hydrate the root element in the HTML.
  <BrowserRouter>
    <App />
  </BrowserRouter>, // Wrap the App component with BrowserRouter for client-side routing.
);
