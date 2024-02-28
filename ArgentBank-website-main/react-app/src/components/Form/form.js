import "../Form/form.css";
import React, { useState } from "react";
import { loginUser } from "../../redux/callAPI"; // Modifier pour importer loginUser
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const loginUser = useLogin(); // Utilisez le hook pour obtenir la fonction loginUser
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate);
    // La redirection est maintenant gérée dans useLoginUser
  };

  return (
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
          {/* <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
          </div> */}
          {/* {errorMessage} */}
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
