import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Loading from "./components/models/loading/Loading";

// Lazy load components
const AuthPage = lazy(() => import("./pages/authPage/AuthPage"));
const AccountPage = lazy(() => import("./pages/account/account"));
const Home = lazy(() => import("./pages/home/home"));
const Shop = lazy(() => import("./pages/shop/shop"));
const Favorites = lazy(() => import("./pages/favorites/favorites"));
const Cart = lazy(() => import("./pages/cart/cart"));
const NavigationBar = lazy(
  () => import("./components/navigationBar/NavigationBar")
);

const RoutesConfig = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="/authentication" element={<AuthPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            {/* Add error boundary for collection routes */}
            <Route path="/collections">
              <Route
                path="chrome-heart"
                element={<div>Chrome Heart Collection</div>}
              />
              <Route
                path="darker-than-black"
                element={<div>Darker Than Black Collection</div>}
              />
              <Route
                path="faithless"
                element={<div>Faithless Collection</div>}
              />
            </Route>
            <Route path="/contact" element={<div>Contact Page</div>} />
            {/* Add a catch-all route for 404 */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default RoutesConfig;
