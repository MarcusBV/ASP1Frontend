import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProjectsProvider } from "./contexts/ProjectsContext.jsx";
import { ClientsProvider } from "./contexts/ClientsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClientsProvider>
      <ProjectsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProjectsProvider>
    </ClientsProvider>
  </StrictMode>
);
