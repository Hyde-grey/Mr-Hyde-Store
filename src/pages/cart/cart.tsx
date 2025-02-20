import MainCanvas from "../../components/MainCanvas/MainCanvas";
import CartHtmlLayout from "./cartHtmlLayout.tsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useGetCollections } from "../../hooks/useGetCollections";
import useScreenSize from "../../hooks/useScreenSize";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, updateSize } =
    useContext(CartContext);
  const collections = useGetCollections();
  const { isMobile } = useScreenSize();

  // Get full product details for cart items
  const cartItems = cart
    .map((cartItem) => {
      const product = collections
        .flatMap((c) => c.products)
        .find((p) => p.id === cartItem.product.id);

      return product
        ? {
            ...cartItem,
            product,
          }
        : null;
    })
    .filter((item) => item !== null);

  const total = getCartTotal();

  // Calculate number of pages based on items
  const calculatePages = () => {
    const itemsPerPage = isMobile ? 2 : 4; // Fewer items per page on mobile
    const basePages = 2; // Hero section and minimum content space
    const itemPages = Math.ceil(cartItems.length / itemsPerPage);
    return Math.max(basePages, itemPages + 1); // Add 1 for hero section
  };

  return (
    <MainCanvas numberOfPages={calculatePages()}>
      <CartHtmlLayout
        cartItems={cartItems}
        total={total}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        updateSize={updateSize}
      />
    </MainCanvas>
  );
};

export default Cart;
