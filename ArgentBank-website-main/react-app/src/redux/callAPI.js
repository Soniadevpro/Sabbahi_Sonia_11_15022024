import axios from "axios"; // Utilisé pour faire des requêtes HTTP.
import { store } from "./reducers/store"; // Accède au store Redux pour dispatcher des actions.
import { setUser, setToken } from "./actions/userSlice"; // Importe les actions nécessaires.

// loginUser effectue une requête POST pour connecter l'utilisateur.
export const loginUser = async (email, password, navigate) => {
  try {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });
    const token = response.data.body.token; // Extrait le token de la réponse.
    store.dispatch(setToken({ token }));

    // console.log(token);
    await fetchUserProfile(token); // Récupère le profil de l'utilisateur.
    // store.dispatch(setUser(response.data.body));
    alert("Connexion réussie !");
    navigate("/profile");
  } catch (error) {
    console.error(error);
    alert("Erreur de connexion !");
  }
};

export const fetchUserProfile = async (token) => {
  try {
    const profileResponse = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {}, // Corps de la requête vide, puisque l'API ne demande pas de paramètres spécifiques ici
      {
        headers: {
          Authorization: `Bearer ${token}`, // Inclut le token dans les headers pour l'authentification
        },
      }
    );
    console.log(profileResponse.data);
    // Extraction et mise à jour de l'état avec les informations de l'utilisateur
    // const { id, email } = profileResponse.data.body; // Supprime le token de cette déstructuration car il ne devrait pas être re-défini ici
    store.dispatch(setUser(profileResponse.data.body)); // Utilise le token déjà disponible
  } catch (error) {
    console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
  }
};
