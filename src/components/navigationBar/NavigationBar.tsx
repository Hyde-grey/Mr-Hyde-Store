import { Link, Outlet } from "react-router-dom";
import classNames from "classnames";

import { RiAccountCircleLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";

import { useScrollContext } from "../../contexts/ScrollContext";
import { useMenuContext } from "../../contexts/MenuContext";

import MenuButton from "./MenuButton";
import Menu from "../Menu/Menu";
import useScreenSize from "../hooks/useScreenSize";

import styles from "./styles.module.css";

const NavigationBar = () => {
  const { isPassedThreshold } = useScrollContext();
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { isMobile } = useScreenSize();

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={classNames(styles.navBarContainer, {
          [styles.hidden]: !isPassedThreshold,
          [styles.menuOpened]: isMenuOpen,
        })}
      >
        <ul className={classNames(styles.navBarItems, styles.navCollection)}>
          <li>+ Collection</li>
        </ul>
        <span
          className={classNames(styles.logo, styles.navBarItems, {
            [styles.opacityZero]: !isPassedThreshold && !isMenuOpen,
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
          <Link to="/authentication" className={styles.navLink}>
            <li>
              <RiAccountCircleLine /> <p>Login | Sign Up</p>
              <div className={classNames(styles.linkBorder)}></div>
            </li>
          </Link>
          <Link to="/favorites" className={classNames(styles.navLink)}>
            <li>
              <FiHeart /> <p>Favorite</p>
              <div className={classNames(styles.linkBorder)}></div>
            </li>
          </Link>
          <Link to="/cart" className={classNames(styles.navLink)}>
            <li>
              <PiShoppingCartLight /> <p>Cart</p>
              <div className={classNames(styles.linkBorder)}></div>
            </li>
          </Link>

          <li onClick={() => toggleMenuHandler()}>
            <p>Menu</p> <MenuButton />
            <div className={classNames(styles.linkBorder)}></div>
          </li>
        </ul>
      </div>
      <Menu />
      {isMobile ? <MenuButton /> : null}
      <Outlet />
    </>
  );
};

export default NavigationBar;
