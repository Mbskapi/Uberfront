import React from "react";
import Home from "../Home";
import Login from "../Registration/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../Registers/Register";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<login />} />
        <Route path="register" element={<Register />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default Routers;
