import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./styles.module.css";
import useScreenSize from "../../components/hooks/useWindowSize";
import { useDetectScroll } from "../hooks/useDetectScroll";

const NavigationBar = () => {
  const isMobile = useScreenSize();
  const isPassedThreshold = useDetectScroll(0.5); // Detect if scrolled past 50% of viewport

  console.log("Is it passed threshold?", isPassedThreshold);

  return (
    <div
      className={
        isMobile && isPassedThreshold
          ? styles.navBarContainer
          : `${styles.navBarContainer} ${styles.hidden}`
      }
    >
      <ul className={`${styles.navBarItems} ${styles.navCollection}`}>
        <li>+ Collection</li>
      </ul>
      <span className={`${styles.logo} ${styles.navBarItems}`}>
        <Link to="/" className={styles.navLink}>
          Mr. Hyde Store
        </Link>
      </span>
      <ul className={`${styles.navBar} ${styles.navBarItems}`}>
        <Link to="/login" className={styles.navLink}>
          <li>
            <RiAccountCircleLine /> <p>Log-in</p>
            <div className={styles.linkBorder}></div>
          </li>
        </Link>
        <Link to="/favorites" className={styles.navLink}>
          <li>
            <FiHeart /> <p>Favorite</p>
            <div className={styles.linkBorder}></div>
          </li>
        </Link>
        <Link to="/cart" className={styles.navLink}>
          <li>
            <PiShoppingCartLight /> <p>Cart</p>
            <div className={styles.linkBorder}></div>
          </li>
        </Link>
        <Link to="/menu" className={styles.navLink}>
          <li>
            <RxHamburgerMenu /> <p>Menu</p>
            <div className={styles.linkBorder}></div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
