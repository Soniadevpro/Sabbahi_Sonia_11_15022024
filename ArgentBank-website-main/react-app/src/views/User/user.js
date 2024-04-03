import React, { useState, useEffect } from "react";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../../redux/actions/userSlice";
import { useNavigate } from "react-router-dom";
import AccountsOverview from "../../components/Account/account";
const User = () => {
  // Définit des états pour gérer le nom d'utilisateur et l'affichage du formulaire d'édition.
  const user = useSelector((state) => state.user); // Accède à l'état de l'utilisateur stocké dans Redux.
  const [userName, setUserName] = useState(user.username || "");

  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, name, firstname } = user; // Extrai les informations nécessaires de l'état de l'utilisateur.
  console.log(token);

  if (!token) {
    navigate("/login");
  }
  // Synchronisez l'état local avec Redux
  useEffect(() => {
    if (user && user.username) {
      setUserName(user.username);
    }
  }, [user, user.username]);
  // Gère la soumission du formulaire de mise à jour du userName.

  const handleUpdateUserName = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", { userName: userName }, { headers: { Authorization: `Bearer ${token}` } });
      console.log(response);
      dispatch(
        setUser({
          userName: userName,
          firstName: user.firstname,
          lastName: user.name,
        })
      );
      alert("Nom d'utilisateur mis à jour avec succès !");
      setIsEditing(false); // Masquer le formulaire après la mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour du nom d'utilisateur:", error);
      alert("Échec de la mise à jour du nom d'utilisateur.");
    }
  };
  console.log("Informations de l'utilisateur :", user);
  console.log("Username value:", userName);
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstname} {user.name} !
          </h1>
          {!isEditing && (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          )}
        </div>
        {isEditing && (
          <div className="header">
            <form className="container-form" onSubmit={handleUpdateUserName}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} disabled />
              </div>
              <div className="input-group">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" value={firstname} disabled />
              </div>
              <div className="input-group">
                <label htmlFor="userName">Username</label>
                <input type="text" id="username" placeholder="Nouveau nom d'utilisateur" value={userName || ""} onChange={(e) => setUserName(e.target.value)} required />
              </div>
              <button type="submit" className="edit-button">
                Update
              </button>
            </form>
          </div>
        )}
        <AccountsOverview />
      </main>
    </div>
  );
};

export default User;
