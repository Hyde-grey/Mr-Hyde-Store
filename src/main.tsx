import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext";
import { MenuProvider } from "./contexts/MenuContext.tsx";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { CartProvider } from "./contexts/CartContext";
import { KeyRotationProvider } from "./contexts/KeyRotationContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <MenuProvider>
        <ScrollProvider>
          <FavoritesProvider>
            <CartProvider>
              <KeyRotationProvider>
                <App />
              </KeyRotationProvider>
            </CartProvider>
          </FavoritesProvider>
        </ScrollProvider>
      </MenuProvider>
    </UserProvider>
  </React.StrictMode>
);
