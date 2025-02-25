import classNames from "classnames";
import { HiHome } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./styles.module.css";

import { useLogout } from "../../hooks/useLogOut";
import { Link, useLocation } from "react-router-dom";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useMenuContext } from "../../contexts/MenuContext";

const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { logout, error } = useLogout();
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const overlayClickHandler = () => {
    setIsMenuOpen(false);
  };

  const menuClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const menuItems = [
    { path: "/", icon: HiHome, label: "Home" },
    {
      path: "/shop",
      icon: AiOutlinePlusCircle,
      label: "Shop",
      subItems: [
        { path: "/collections/chrome-heart", label: "Chrome Heart" },
        { path: "/collections/darker-than-black", label: "Darker Than Black" },
        { path: "/collections/faithless", label: "Faithless" },
      ],
    },
    {
      path: currentUser ? "/account" : "/authentication",
      icon: currentUser ? MdAccountCircle : RiAccountCircle2Fill,
      label: currentUser ? "Account" : "Login | Register",
      requiresAuth: false,
    },
    {
      path: "/favorites",
      icon: MdFavorite,
      label: "Favorites",
      requiresAuth: true,
    },
    { path: "/cart", icon: FaShoppingCart, label: "Cart" },
  ];

  return (
    <>
      <div
        className={classNames(styles.overlay, {
          [styles.overlayIsOpened]: isMenuOpen,
        })}
        onClick={overlayClickHandler}
      >
        <button className={styles.overlayButton} aria-label="Close Menu" />
        <div
          onClick={menuClickHandler}
          className={classNames(styles.menuContainer, {
            [styles.menuIsOpened]: isMenuOpen,
          })}
        >
          <div className={styles.menuContent}>
            <div className={styles.menuLogo}>
              <span>Mr. Hyde Store</span>
            </div>
            <div className={styles.divider} />
            <ul>
              {menuItems.map((item) =>
                !item.requiresAuth || currentUser ? (
                  <div key={item.path}>
                    <Link to={item.path} className={styles.navLink}>
                      <li
                        className={classNames({
                          [styles.active]: location.pathname === item.path,
                        })}
                      >
                        <item.icon className={styles.icons} />
                        <span>{item.label}</span>
                      </li>
                    </Link>
                    {item.subItems && (
                      <ul className={styles.subMenu}>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={styles.navLink}
                          >
                            <li
                              className={classNames({
                                [styles.active]:
                                  location.pathname === subItem.path,
                              })}
                            >
                              <span>{subItem.label}</span>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : null
              )}
            </ul>
          </div>
          {currentUser && (
            <div className={styles.logoutContainer}>
              <ul>
                <li onClick={logout} className={classNames(styles.navLink)}>
                  <FiLogOut
                    className={classNames(styles.icons, styles.logout)}
                  />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Menu;
