import React, { useState } from "react";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../../redux/actions/userSlice";

const User = () => {
  // Définit des états pour gérer le nom d'utilisateur et l'affichage du formulaire d'édition.
  const [userName, setUserName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Accède à l'état de l'utilisateur stocké dans Redux.
  const { token, name, firstname } = user; // Extrai les informations nécessaires de l'état de l'utilisateur.

  // Gère la soumission du formulaire de mise à jour du userName.

  const handleUpdateUserName = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", { userName }, { headers: { Authorization: `Bearer ${token}` } });
      console.log(response);
      dispatch(setUser({ ...user, username: userName }));

      alert("Nom d'utilisateur mis à jour avec succès !");
      setIsEditing(false); // Masquer le formulaire après la mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour du nom d'utilisateur:", error);
      alert("Échec de la mise à jour du nom d'utilisateur.");
    }
  };
  console.log("Informations de l'utilisateur :", user);
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.username || "User"}!
          </h1>
          {!isEditing && (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          )}
        </div>
        {isEditing && (
          <div className="header">
            <form onSubmit={handleUpdateUserName}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} disabled />
              </div>
              <div className="input-group">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" value={firstname} disabled />
              </div>
              <div className="input-group">
                <label htmlFor="userName">New Username</label>
                <input type="text" id="userName" placeholder="Nouveau nom d'utilisateur" value={userName} onChange={(e) => setUserName(e.target.value)} required />
              </div>
              <button type="submit" className="edit-button">
                Mettre à jour
              </button>
            </form>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
