import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { Product } from "../hooks/useGetCollections";
import { UserContext } from "./UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getCart: () => CartItem[];
  getCartTotal: () => number;
};

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

const defaultCartContext: CartContextType = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getCart: () => [],
  getCartTotal: () => 0,
};

export const CartContext = createContext<CartContextType>(defaultCartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { userID } = useContext(UserContext);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);

  // Load initial cart
  useEffect(() => {
    const loadCart = async () => {
      setIsInitialLoadComplete(false);
      if (userID) {
        try {
          const userDocRef = doc(db, "users", userID);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.cart) {
              setCart(userData.cart);
            }
          } else {
            const saved = localStorage.getItem("cart");
            if (saved) {
              const parsed = JSON.parse(saved);
              if (Array.isArray(parsed)) {
                setCart(parsed);
                await setDoc(userDocRef, { cart: parsed }, { merge: true });
              }
            }
          }
        } catch (error) {
          console.error("Error loading cart:", error);
        }
      } else {
        const saved = localStorage.getItem("cart");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setCart(parsed);
          }
        }
      }
      setIsInitialLoadComplete(true);
    };

    loadCart();
  }, [userID]);

  // Save cart whenever it changes
  useEffect(() => {
    if (!isInitialLoadComplete) return;

    const saveCart = async () => {
      localStorage.setItem("cart", JSON.stringify(cart));

      if (userID) {
        try {
          const userDocRef = doc(db, "users", userID);
          await setDoc(userDocRef, { cart }, { merge: true });
        } catch (error) {
          console.error("Error saving cart to Firestore:", error);
        }
      }
    };

    saveCart();
  }, [cart, userID, isInitialLoadComplete]);

  const getCart = () => {
    return cart;
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const addToCart = (product: Product, size: string) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { product, size, quantity: 1 }]);
      console.log(cart);
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
