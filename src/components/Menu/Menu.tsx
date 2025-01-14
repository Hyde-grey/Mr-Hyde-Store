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
import { useState } from "react";
import { useLogout } from "../../hooks/useLogOut";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";

const Menu = () => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { logout, error, loading } = useLogout();
  const { user } = useAuth();

  const collectionDisplayHandler = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

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
            {user ? (
              <li>
                <MdAccountCircle className={classNames(styles.icons)} />
                My Account
              </li>
            ) : (
              <Link to="/authentication" className={styles.navLink}>
                <li>
                  <RiAccountCircleLine /> <p>Login | Sign Up</p>
                  <div className={classNames(styles.linkBorder)}></div>
                </li>
              </Link>
            )}
            <li>
              <MdFavorite className={classNames(styles.icons)} />
              Favorites
            </li>
            <li>
              <FaShoppingCart className={classNames(styles.icons)} />
              Cart
            </li>
            <li onClick={collectionDisplayHandler}>
              <AiOutlinePlusCircle className={classNames(styles.icons)} />
              Collections
            </li>
            <li
              className={classNames(styles.collectionMenu, {
                [styles.collectionDisplay]: isCollectionOpen,
              })}
            >
              <ul
                className={classNames(styles.collectionMenu, {
                  [styles.collectionDisplay]: isCollectionOpen,
                })}
              >
                <li>ChromeHeart Collection</li>
                <li>Darker Than Black Collection</li>
                <li>Faithless Collection</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <FaPhone className={classNames(styles.icons)} />
              Contact Us
            </li>
            {user ? (
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
