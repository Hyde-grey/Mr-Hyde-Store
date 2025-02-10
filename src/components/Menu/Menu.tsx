import classNames from "classnames";
import { HiHome } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import styles from "./styles.module.css";
import { useMenuContext } from "../../contexts/MenuContext";
import { useLogout } from "../../hooks/useLogOut";

import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { RiAccountCircle2Fill } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { logout, error, loading } = useLogout();
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
          <ul>
            <Link to="/" className={styles.navLink}>
              <li>
                <HiHome className={classNames(styles.icons)} /> Home
              </li>
            </Link>
            {currentUser ? (
              <Link to="/account" className={styles.navLink}>
                <li>
                  <MdAccountCircle className={classNames(styles.icons)} />
                  My Account
                </li>
              </Link>
            ) : (
              <Link to="/authentication" className={styles.navLink}>
                <li>
                  <RiAccountCircle2Fill className={classNames(styles.icons)} />{" "}
                  Login | Sign Up
                  <div className={classNames(styles.linkBorder)}></div>
                </li>
              </Link>
            )}
            {currentUser ? (
              <Link to="/favorites" className={styles.navLink}>
                <li>
                  <MdFavorite className={classNames(styles.icons)} />
                  Favorites
                </li>
              </Link>
            ) : null}
            <li>
              <FaShoppingCart className={classNames(styles.icons)} />
              Cart
            </li>
            <Link to="/shop" className={styles.navLink}>
              <li>
                <AiOutlinePlusCircle className={classNames(styles.icons)} />
                Collections
              </li>
            </Link>
          </ul>
          <ul>
            <li>
              <FaPhone className={classNames(styles.icons)} />
              Contact Us
            </li>
            {currentUser ? (
              <li onClick={logout}>
                <FiLogOut className={classNames(styles.icons, styles.logout)} />
                {loading ? "Logging out..." : "Logout"}
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
