import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/home";
import Login from "./views/Login/login";
import Profile from "./views/Profile/profile";
import ProtectedRoute from "./redux/protectedRoute";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/actions/userSlice"; // Assurez-vous que le chemin d'importation est correct

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      // Dispatcher l'action setToken pour mettre à jour l'état global avec le token trouvé
      dispatch(setToken({ token }));
      // Vous pouvez également appeler fetchUserProfile ici si nécessaire, ou gérer cela dans vos composants protégés
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
