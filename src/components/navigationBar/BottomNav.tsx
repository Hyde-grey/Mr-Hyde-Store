import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./BottomNav.module.css";
const BottomNav = () => {
  return (
    <div className={styles.bottomNavContainer}>
      <ul className={styles.bottomNavBar}>
        <li>
          <RxHamburgerMenu />
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
