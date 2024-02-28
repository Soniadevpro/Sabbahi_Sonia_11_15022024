import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import home from "./views/Home/home";

// import protectedRoute from "./redux/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route element={<protectedRoute />} />
        <Route path="/user-account" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
