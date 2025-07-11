import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

// Utiliser render si le client n'a pas d'évènements ou d'interactions à relier
hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
