import axios from "axios";

import { store } from "./reducers/store"; // Ajouter l'importation du store
import { setUser, setToken } from "./actions/userSlice"; // Ajouter l'importation de setUp

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

export const loginUser = async (email, password, navigate) => {
  try {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

    const token = response.data.token;

    console.log(response.data.body);
    store.dispatch(setToken(response.data.body));
    await fetchUserProfile(token);
    store.dispatch(setUser(response.data.body));

    // Afficher une alerte de succès
    alert("Connexion réussie !");
    navigate("/profile");
    // Redirection si nécessaire
  } catch (error) {
    console.error(error);
    // Vous pouvez également afficher une alerte en cas d'erreur
    alert("Erreur de connexion !");
  }
};
export const fetchUserProfile = async (token) => {
  try {
    const profileResponse = await axios.put("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Extraction et mise à jour de l'état avec les informations de l'utilisateur
    const { name, firstname, username } = profileResponse.data.body;
    store.dispatch(setUser({ name, firstname, username, token }));
  } catch (error) {
    console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
  }
};
