import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userSlice"; // Importation de l'action logout
import "./header.css";
import Logo from "../../assets/argentBankLogo.png"; // Importation du logo

// Composant Navbar : Barre de navigation pour l'application
const header = () => {
  // Accès à l'état de l'utilisateur depuis le store Redux
  const user = useSelector((state) => state.user);
  // Utilisation de useDispatch pour envoyer des actions à Redux
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Création de l'instance navigate
  // console.log pour le débogage, affiche l'état actuel de l'utilisateur
  console.log("User state in Navbar:", user);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    console.log("Logging out..."); // Log pour le débogage
    dispatch(logout());
    navigate("/login"); // Envoie l'action logout pour réinitialiser l'état de l'utilisateur

    //
  };

  return (
    <nav className="main-nav">
      {/* Lien vers la page d'accueil avec le logo */}
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1> {/* Utilisé pour l'accessibilité */}
      </Link>
      <div>
        {/* Affichage conditionnel basé sur l'état de connexion de l'utilisateur */}
        {user.token ? (
          // Affichage pour l'utilisateur connecté
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i> {/* Icône de l'utilisateur */}
              {user.username} {/* Nom d'utilisateur affiché */}
            </span>

            {/* Bouton de déconnexion */}
            <Link to="/login" onClick={handleLogout} className="main-nav-item logout-button">
              Sign Out
            </Link>
          </>
        ) : (
          // Affichage pour l'utilisateur non connecté
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> {/* Icône de connexion */}
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default header;
