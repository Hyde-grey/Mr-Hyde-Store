import { Link } from "react-router-dom";
import classNames from "classnames";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./styles.module.css";
import { useScrollContext } from "../../contexts/ScrollContext";
import { useMenuContext } from "../../contexts/MenuContext";

const NavigationBar = () => {
  const { isPassedThreshold } = useScrollContext();
  const { isMenuOpen } = useMenuContext();

  return (
    <div
      className={classNames(styles.navBarContainer, {
        [styles.hidden]: !isPassedThreshold || isMenuOpen,
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
        <Link to="/" className={styles.navLink}>
          Mr. Hyde Store
        </Link>
      </span>

      <ul className={classNames(styles.navBar, styles.navBarItems)}>
        <Link to="/login" className={styles.navLink}>
          <li>
            <RiAccountCircleLine /> <p>Log-in</p>
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
        <Link to="/menu" className={classNames(styles.navLink)}>
          <li>
            <RxHamburgerMenu /> <p>Menu</p>
            <div className={classNames(styles.linkBorder)}></div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
