import classNames from "classnames";
import { HiHome } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./styles.module.css";

import { useLogout } from "../../hooks/useLogOut";

import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { RiAccountCircle2Fill } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useMenuContext } from "../../contexts/MenuContext";

const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { logout, error } = useLogout();
  const { currentUser } = useContext(UserContext);
  const location = useLocation(); // Use useLocation hook

  // Close menu on path change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const overlayClickHandler = () => {
    setIsMenuOpen(false);
  };

  const menuClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={classNames(styles.overlay, {
          [styles.overlayIsOpened]: isMenuOpen,
        })}
      >
        <button
          onClick={overlayClickHandler}
          className={classNames(styles.overlayButton)}
          aria-label="Close Menu"
        >
          {/* Hidden button for accessibility */}
        </button>
        <div
          onClick={menuClickHandler}
          className={classNames(styles.menuContainer, {
            [styles.menuIsOpened]: isMenuOpen,
          })}
        >
          <div className={classNames(styles.menuLogo)}>
            <span>Mr. Hyde Store</span>
          </div>
          <div className={styles.divider}></div>
          <ul>
            <Link to="/" className={styles.navLink}>
              <li>
                <div className={classNames(styles.iconsContainer)}>
                  <HiHome className={classNames(styles.icons)} />
                </div>
                <span>Home</span>
              </li>
            </Link>
            {currentUser ? (
              <Link to="/account" className={styles.navLink}>
                <li>
                  <div className={classNames(styles.iconsContainer)}>
                    <MdAccountCircle className={classNames(styles.icons)} />
                  </div>
                  <span>Account</span>
                </li>
              </Link>
            ) : (
              <Link to="/authentication" className={styles.navLink}>
                <li>
                  <div className={classNames(styles.iconsContainer)}>
                    <RiAccountCircle2Fill
                      className={classNames(styles.icons)}
                    />
                  </div>
                  <span>Login | Register</span>
                  <div className={classNames(styles.linkBorder)}></div>
                </li>
              </Link>
            )}
            {currentUser ? (
              <Link to="/favorites" className={styles.navLink}>
                <li>
                  <div className={classNames(styles.iconsContainer)}>
                    <MdFavorite className={classNames(styles.icons)} />
                  </div>
                  <span>Favorites</span>
                </li>
              </Link>
            ) : null}
            <Link to="/cart" className={styles.navLink}>
              <li>
                <div className={classNames(styles.iconsContainer)}>
                  <FaShoppingCart className={classNames(styles.icons)} />
                </div>
                <span>Cart</span>
              </li>
            </Link>
            <Link to="/shop" className={styles.navLink}>
              <li>
                <div className={classNames(styles.iconsContainer)}>
                  <AiOutlinePlusCircle className={classNames(styles.icons)} />
                </div>
                <span>Shop</span>
              </li>
            </Link>
          </ul>
          <ul>
            {currentUser ? (
              <li onClick={logout}>
                <div className={classNames(styles.iconsContainer)}>
                  <FiLogOut
                    className={classNames(styles.icons, styles.logout)}
                  />
                </div>
                <span>Logout</span>
              </li>
            ) : null}
            {error && <p>{error}</p>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
