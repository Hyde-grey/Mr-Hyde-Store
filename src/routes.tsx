import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
