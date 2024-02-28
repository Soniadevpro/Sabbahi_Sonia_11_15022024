import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/index.css";

// REDUX
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
// Utilisation de createRoot pour rendre votre application
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>
);
// Provider rend le store Redux disponible à tous les composants de l'application
