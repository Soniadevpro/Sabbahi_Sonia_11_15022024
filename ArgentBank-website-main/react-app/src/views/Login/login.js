import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/form";

const Login = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  React.useEffect(() => {
    // Si le token est présent, rediriger l'utilisateur vers la page de profil
    if (token) {
      navigate("/profile");
    }
  }, [navigate, token]);

  return (
    <div>
      <Form />
    </div>
  );
};

export default Login;
