import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/home";
import Login from "./views/Login/login";

import ProtectedRoute from "./redux/protectedRoute";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/actions/userSlice"; // Assurez-vous que le chemin d'importation est correct
import { fetchUserProfile } from "./redux/callAPI";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import User from "./views/User/user";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      // Dispatcher l'action setToken pour mettre à jour l'état global avec le token trouvé
      dispatch(setToken({ token }));
      fetchUserProfile(token);
      // Vous pouvez également appeler fetchUserProfile ici si nécessaire, ou gérer cela dans vos composants protégés
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
