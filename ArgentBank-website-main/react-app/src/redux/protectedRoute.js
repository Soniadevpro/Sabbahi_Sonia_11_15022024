// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// // Composant ProtectedRoute : Un composant de route protégée pour restreindre l'accès aux pages.
// const ProtectedRoute = ({ children }) => {
//   // Accès au token de l'état Redux.
//   const token = useSelector((state) => state.user.token);

//   // Utilisation du hook useLocation pour accéder à l'objet de localisation actuel.
//   const location = useLocation();

//   // Si l'utilisateur n'a pas de token (non connecté), rediriger vers la page de connexion.
//   if (!token) {
//     // Navigate est un composant de React Router pour la redirection.
//     // 'replace' remplace l'entrée actuelle dans l'historique de navigation.
//     // 'state' permet de passer des informations supplémentaires à la route de destination.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // Si l'utilisateur a un token (connecté), afficher les enfants du composant.
//   // 'children' est un prop spécial en React qui représente les éléments enfants de ce composant.
//   return children;
// };

// export default ProtectedRoute;
