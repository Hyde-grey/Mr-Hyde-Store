import { memo } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { Product } from "../../hooks/useGetCollections";
import StartBorder from "../../components/button/StartBorder";
import buttonStyles from "../../components/button/Button.module.css";
import styles from "./cart.module.css";
import useScreenSize from "../../hooks/useScreenSize";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

type CartHtmlLayoutProps = {
  cartItems: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateSize: (productId: number, newSize: string) => void;
  total: number;
};

const CartHtmlLayout = memo(
  ({
    cartItems,
    updateQuantity,
    removeFromCart,
    updateSize,
    total,
  }: CartHtmlLayoutProps) => {
    const { isMobile } = useScreenSize();
    const [fontSize, setFontSize] = useState(0);
    const scroll = useScroll();

    useFrame(() => {
      if (isMobile) {
        const scrollY = scroll.offset;
        setFontSize(3 - scrollY * 8);
      } else {
        const scrollY = scroll.offset;
        setFontSize(10 - scrollY * 19);
      }
    });

    const handleSizeChange = (
      productId: number,
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      updateSize(productId, event.target.value);
    };

    return (
      <Scroll html>
        <div className={styles.cartHero}>
          <h1 style={{ fontSize: `${fontSize}rem` }}>Shopping Cart</h1>
        </div>
        <div className={styles.cartContainer}>
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
                      <div className={styles.itemOptions}>
                        <div className={styles.sizeSelector}>
                          <p>Size:</p>
                          <select
                            value={item.size}
                            onChange={(e) =>
                              handleSizeChange(item.product.id, e)
                            }
                            className={styles.sizeSelect}
                          >
                            {item.product.sizes.map((sizeOption) => (
                              <option
                                key={sizeOption.size}
                                value={sizeOption.size}
                              >
                                {sizeOption.size}
                              </option>
                            ))}
                          </select>
                        </div>
                        <p className={styles.price}>
                          £{(item.product.price * item.quantity).toFixed(2)}
                          {item.quantity > 1 && (
                            <span className={styles.unitPrice}>
                              (£{item.product.price} each)
                            </span>
                          )}
                        </p>
                      </div>
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
                <StartBorder
                  className={buttonStyles.buttonLayout}
                  as="button"
                  type="submit"
                  color="white"
                  speed="5s"
                >
                  <p>Checkout</p>
                </StartBorder>
              </div>
            </div>
          )}
        </div>
      </Scroll>
    );
  }
);

export default CartHtmlLayout;
