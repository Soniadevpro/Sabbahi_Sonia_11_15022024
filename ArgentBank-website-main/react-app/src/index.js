import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// REDUX
import { Provider } from "react-redux";
import { store } from "./redux/reducers/store";
// Utilisation de createRoot pour rendre votre application
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>
);
// Provider rend le store Redux disponible à tous les composants de l'application
