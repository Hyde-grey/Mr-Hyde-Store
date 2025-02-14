import { Link, Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useContext } from "react";

import { RiAccountCircleLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

import { useScrollContext } from "../../contexts/ScrollContext";
import { useMenuContext } from "../../contexts/MenuContext";
import { CartContext } from "../../contexts/CartContext";

import MenuButton from "./MenuButton";
import Menu from "../Menu/Menu";
import useScreenSize from "../../hooks/useScreenSize";

import styles from "./styles.module.css";

import { UserContext } from "../../contexts/UserContext";

const NavigationBar = () => {
  const { isPassedThreshold } = useScrollContext();
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { isMobile } = useScreenSize();
  const { currentUser } = useContext(UserContext);
  const { getCartItemCount } = useContext(CartContext);

  const isHomePage =
    useLocation().pathname === "/" || useLocation().pathname === "/home";

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItemCount = getCartItemCount();

  return (
    <>
      <div
        className={classNames(styles.navBarContainer, {
          [styles.hidden]: !isPassedThreshold && isHomePage && !currentUser,
          [styles.menuOpened]: isMenuOpen,
        })}
      >
        <ul className={classNames(styles.navBarItems, styles.navCollection)}>
          <Link to="/shop" className={styles.navLink}>
            <li>+ Collection</li>
          </Link>
        </ul>
        <span
          className={classNames(styles.logo, styles.navBarItems, {
            [styles.opacityZero]:
              !isPassedThreshold && !isMenuOpen && isHomePage,
          })}
        >
          <Link to="/" className={classNames(styles.navLink)}>
            <span
              className={classNames({
                [styles.hidden]: isMenuOpen,
              })}
            >
              Mr. Hyde Store
            </span>
          </Link>
        </span>

        <ul className={classNames(styles.navBar, styles.navBarItems)}>
          {currentUser ? (
            <Link to="/account" className={styles.navLink}>
              <li>
                <RiAccountCircleLine /> <p>My account</p>
                <div className={classNames(styles.linkBorder)}></div>
              </li>
            </Link>
          ) : (
            <Link to="/authentication" className={styles.navLink}>
              <li>
                <RiAccountCircleLine /> <p>Login</p>
                <div className={classNames(styles.linkBorder)}></div>
              </li>
            </Link>
          )}
          {currentUser ? (
            <Link to="/favorites" className={classNames(styles.navLink)}>
              <li>
                <FiHeart /> <p>Favorite</p>
                <div className={classNames(styles.linkBorder)}></div>
              </li>
            </Link>
          ) : null}
          <Link to="/cart" className={styles.navLink}>
            <li>
              <div className={styles.cartIconContainer}>
                <BsCart3 />
                {cartItemCount === 0 ? (
                  <p>Cart</p>
                ) : (
                  <p
                    className={styles.cartBadge}
                    data-digits={cartItemCount.toString().length}
                  >
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </p>
                )}
              </div>
              <div className={classNames(styles.linkBorder)}></div>
            </li>
          </Link>

          {isMobile ? (
            <li onClick={() => toggleMenuHandler()}>
              <p>Menu</p> <MenuButton />
              <div className={classNames(styles.linkBorder)}></div>
            </li>
          ) : null}
        </ul>
      </div>
      <Menu />
      {isMobile ? <MenuButton /> : null}
      <Outlet />
    </>
  );
};

export default NavigationBar;
