import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Container root not found. Failed to mount react app"
  );
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
