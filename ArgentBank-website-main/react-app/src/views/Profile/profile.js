import React from "react";

import { useSelector } from "react-redux";
import User from "../../components/User/user";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
const Profile = () => {
  // Utilisation de useSelector : Le hook useSelector permet d'accéder à l'état Redux. Ici, vous extrayez l'état user et l'affichez dans la console.
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <Header />
      <User />
      <Footer />
    </div>
  );
};

export default Profile;
