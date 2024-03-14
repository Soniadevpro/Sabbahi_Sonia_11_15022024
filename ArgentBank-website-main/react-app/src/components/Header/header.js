import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userSlice"; // Importation de l'action logout

import "./header.css";
import Logo from "../../assets/images/argentBankLogo.webp"; // Importation du logo

const Header = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Création de l'instance navigate
  console.log("User state in Navbar:", user);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    console.log("Logging out..."); // Log pour le débogage
    dispatch(logout());
    navigate("/login"); // Envoie l'action logout pour réinitialiser l'état de l'utilisateur
  };

  console.log(user.username);
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* Affichage conditionnel basé sur l'état de connexion de l'utilisateur */}
        {user.token ? (
          // Affichage pour l'utilisateur connecté
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {/* Modification ici pour afficher le username s'il est disponible, sinon firstname et name */}
              {user.username ? user.username : `${user.firstname} ${user.name}`}
            </Link>
            {/* Bouton de déconnexion */}
            <Link to="/login" onClick={handleLogout} className="main-nav-item logout-button">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          // Affichage pour l'utilisateur non connecté
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
