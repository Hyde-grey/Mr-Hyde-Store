import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesConfig from "./routes";
import Home from "./pages/home/home";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<RoutesConfig />} />
    </Routes>
  </Router>
);

export default App;
