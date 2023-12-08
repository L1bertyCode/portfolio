import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "./app/providers/ErrorBoundry";
import { ThemeProvider } from "./app/providers/ThemeProvider";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Container root not found. Failed to mount react app"
  );
}

const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
