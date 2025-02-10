import { memo } from "react";
import { Scroll } from "@react-three/drei";
import { Product } from "../../hooks/useGetCollections";
import Button from "../../components/button/Button";
import styles from "./cart.module.css";

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

type CartHtmlLayoutProps = {
  cartItems: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  total: number;
};

const CartHtmlLayout = memo(
  ({
    cartItems,
    updateQuantity,
    removeFromCart,
    total,
  }: CartHtmlLayoutProps) => {
    return (
      <Scroll html>
        <div className={styles.cartContainer}>
          <h1>Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className={styles.emptyState}>
              <h2>Your cart is empty</h2>
              <p>Add items to your cart to see them here</p>
            </div>
          ) : (
            <div className={styles.cartContent}>
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.product.id} className={styles.cartItem}>
                    <img
                      src={item.product.imageUrls[0]}
                      alt={item.product.name}
                    />
                    <div className={styles.itemDetails}>
                      <h3>{item.product.name}</h3>
                      <p>Size: {item.size}</p>
                      <p>£{item.product.price}</p>
                    </div>
                    <div className={styles.itemActions}>
                      <div className={styles.quantity}>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(0, item.quantity - 1)
                            )
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cartSummary}>
                <h2>Order Summary</h2>
                <div className={styles.summaryDetails}>
                  <div>
                    <span>Subtotal</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                  <div>
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className={styles.total}>
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
                <Button buttonType="submit">Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </Scroll>
    );
  }
);

export default CartHtmlLayout;
