import MainCanvas from "../../components/MainCanvas/MainCanvas";
import CartHtmlLayout from "./cartHtmlLayout.tsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useGetCollections } from "../../hooks/useGetCollections";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } =
    useContext(CartContext);
  const collections = useGetCollections();

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

  return (
    <MainCanvas numberOfPages={1}>
      <CartHtmlLayout
        cartItems={cartItems}
        total={total}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </MainCanvas>
  );
};

export default Cart;
