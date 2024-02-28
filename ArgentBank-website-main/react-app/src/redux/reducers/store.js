// Configuration du store de Redux

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: { user: userReducer }, // userReducer gère l'état lié à l'utilisateur
  devTools: true, // devTools : true permet l'utilisation des outils de développement Redux pour déboguer l'état de l'appilcation
});
