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

// Wrapper component to handle loading state with delay
const DelayedSuspense = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

const RoutesConfig = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <DelayedSuspense>
              <NavigationBar />
            </DelayedSuspense>
          }
        >
          <Route
            index
            element={
              <DelayedSuspense>
                <Home />
              </DelayedSuspense>
            }
          />
          <Route
            path="/authentication"
            element={
              <DelayedSuspense>
                <AuthPage />
              </DelayedSuspense>
            }
          />
          <Route
            path="/account"
            element={
              <DelayedSuspense>
                <AccountPage />
              </DelayedSuspense>
            }
          />
          <Route
            path="/shop"
            element={
              <DelayedSuspense>
                <Shop />
              </DelayedSuspense>
            }
          />
          <Route
            path="/favorites"
            element={
              <DelayedSuspense>
                <Favorites />
              </DelayedSuspense>
            }
          />
          <Route
            path="/cart"
            element={
              <DelayedSuspense>
                <Cart />
              </DelayedSuspense>
            }
          />
          <Route path="/collections">
            <Route
              path="chrome-heart"
              element={<div>Chrome Heart Collection</div>}
            />
            <Route
              path="darker-than-black"
              element={<div>Darker Than Black Collection</div>}
            />
            <Route path="faithless" element={<div>Faithless Collection</div>} />
          </Route>
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesConfig;
