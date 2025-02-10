import { Routes, Route, useLocation } from "react-router-dom";
import AuthPage from "./pages/authPage/AuthPage";
import AccountPage from "./pages/account/account";
import Home from "./pages/home/home";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Shop from "./pages/shop/shop";
import Favorites from "./pages/favorites/favorites";
import Cart from "./pages/cart/cart";
import { AnimatePresence } from "framer-motion";

const RoutesConfig = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/authentication" element={<AuthPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
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
    </AnimatePresence>
  );
};

export default RoutesConfig;
