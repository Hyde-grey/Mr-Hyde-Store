import {
  createContext,
  ReactNode,
  useReducer,
  useEffect,
  useContext,
  useState,
} from "react";
import { UserContext } from "./UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

type FavoritesContextType = {
  favorites: number[];
  addToFavorites: (productId: number) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
};

type FavoritesAction =
  | { type: "ADD_FAVORITE"; payload: number }
  | { type: "REMOVE_FAVORITE"; payload: number }
  | { type: "SET_FAVORITES"; payload: number[] };

function favoritesReducer(state: number[], action: FavoritesAction): number[] {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.includes(action.payload)) return state;
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((id) => id !== action.payload);
    case "SET_FAVORITES":
      return action.payload;
    default:
      return state;
  }
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);
  const { userID } = useContext(UserContext);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);

  // Load initial favorites
  useEffect(() => {
    const loadFavorites = async () => {
      setIsInitialLoadComplete(false);
      if (userID) {
        try {
          const userDocRef = doc(db, "users", userID);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.favorites) {
              dispatch({ type: "SET_FAVORITES", payload: userData.favorites });
            }
          } else {
            const saved = localStorage.getItem("favorites");
            if (saved) {
              const parsed = JSON.parse(saved);
              if (Array.isArray(parsed)) {
                console.log(
                  "No Firestore doc, loading from localStorage:",
                  parsed
                );
                dispatch({ type: "SET_FAVORITES", payload: parsed });
                await setDoc(
                  userDocRef,
                  { favorites: parsed },
                  { merge: true }
                );
              }
            }
          }
        } catch (error) {
          console.error("Error loading favorites:", error);
        }
      } else {
        const saved = localStorage.getItem("favorites");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            dispatch({ type: "SET_FAVORITES", payload: parsed });
          }
        }
      }
      setIsInitialLoadComplete(true);
    };

    loadFavorites();
  }, [userID]);

  // Save favorites whenever they change
  useEffect(() => {
    // Don't save until initial load is complete
    if (!isInitialLoadComplete) return;

    const saveFavorites = async () => {
      if (userID) {
        try {
          const userDocRef = doc(db, "users", userID);
          await setDoc(userDocRef, { favorites }, { merge: true });
        } catch (error) {
          console.error("Error saving to Firestore:", error);
        }
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    saveFavorites();
  }, [favorites, userID, isInitialLoadComplete]);

  const addToFavorites = (productId: number) => {
    dispatch({ type: "ADD_FAVORITE", payload: productId });
  };

  const removeFromFavorites = (productId: number) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: productId });
  };

  const isFavorite = (productId: number) => {
    return favorites.includes(productId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
