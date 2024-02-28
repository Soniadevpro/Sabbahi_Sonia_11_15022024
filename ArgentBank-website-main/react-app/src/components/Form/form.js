import "../Form/form.css";
import React, { useState } from "react";
import { loginUser } from "../../redux/callAPI";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // Déclaration des états locaux pour email et password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Permet de naviguer programmablement entre les routes.

  // Gère la soumission du formulaire.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de soumission de formulaire.
    await loginUser(email, password, navigate); // Appelle loginUser avec email, password, et navigate.
  };

  return (
    // Structure HTML du formulaire de connexion.
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
