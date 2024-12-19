import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage/AuthPage";
import Home from "./pages/home/home";
import NavigationBar from "./components/navigationBar/NavigationBar";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home />} />
      <Route path="/authentication" element={<AuthPage />} />
      <Route path="/account" element={<div>Account Page</div>} />
      <Route path="/favorites" element={<div>Favorites Page</div>} />
      <Route path="/cart" element={<div>Cart Page</div>} />
      <Route
        path="/chrome-heart-collection"
        element={<div>Chrome Heart Collection</div>}
      />
      <Route
        path="/darker-than-black-collection"
        element={<div>Darker Than Black Collection</div>}
      />
      <Route
        path="/faithless-collection"
        element={<div>Faithless Collection</div>}
      />
      <Route path="/contact" element={<div>Contact Page</div>} />
    </Route>
  </Routes>
);

export default RoutesConfig;
