import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../hooks/useGetCollections";

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

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
