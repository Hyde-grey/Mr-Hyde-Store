import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Account from "./pages/Account";
// import Favorites from "./pages/Favorites";
// import Cart from "./pages/Cart";
// import ChromeHeartCollection from "./pages/ChromeHeartCollection";
// import DarkerThanBlackCollection from "./pages/DarkerThanBlackCollection";
// import FaithlessCollection from "./pages/FaithlessCollection";
// import Contact from "./pages/Contact";

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/login" element={"/"} />
      <Route path="/sign-up" element={"/"} />
      <Route path="/account" element={"/"} />
      <Route path="/favorites" element={"/"} />
      <Route path="/cart" element={"/"} />
      <Route path="/chrome-heart-collection" element={"/"} />
      <Route path="/darker-than-black-collection" element={"/"} />
      <Route path="/faithless-collection" element={"/"} />
      <Route path="/contact" element={"/"} />
    </Routes>
  </Router>
);

export default RoutesConfig;
