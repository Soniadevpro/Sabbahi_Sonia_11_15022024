import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home/home";
import Login from "./views/Login/login";
import Profile from "./views/Profile/profile";

import ProtectedRoute from "./redux/protectedRoute";

const App = () => {
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
