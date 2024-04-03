// Logique de gestion de l'état de l'utilisateur

import { createSlice } from "@reduxjs/toolkit";
// Création du slice : Utilisation de createSlice pour créer un slice nommé "user" avec un état initial contenant name, firstname, username et token.

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    firstname: "",
    username: "",
    token: "",
  },
  // Reducers : setUser est un reducer pour mettre à jour l'état de l'utilisateur. Il prend action.payload et met à jour l'état en conséquence.
  reducers: {
    setUser: (state, action) => {
      const { firstName, userName, lastName } = action.payload;
      state.name = lastName;
      state.firstname = firstName;
      state.username = userName;
    },
    logout: (state) => {
      // Effacer l'état
      state.name = "";
      state.firstname = "";
      state.username = "";
      state.token = "";
      // Effacer le token du stockage local et de la session
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },

    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { setUser, logout, setToken, setSignup } = userSlice.actions;
export default userSlice.reducer;
