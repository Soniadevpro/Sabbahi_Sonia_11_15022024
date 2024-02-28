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
      const { name, firstname, username, token } = action.payload;
      state.name = name;
      state.firstname = firstname;
      state.username = username;
      state.token = token;
    },
    logout: (state) => {
      state.name = "";
      state.firstname = "";
      state.username = "";
      state.token = "";
    },

    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },

    setSignup: (state, action) => {},
  },
});

export const { setUser, logout, setToken, setSignup } = userSlice.actions;
export default userSlice.reducer;
