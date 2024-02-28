import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home/home";
import Login from "./views/Login/login";
import Profile from "./views/Profile/profile";

// import protectedRoute from "./redux/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route element={<protectedRoute />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
