import { useScrollContext } from "../../contexts/ScrollContext";
import classNames from "classnames";
import styles from "./BottomNav.module.css";

const BottomNav = () => {
  const { scrollOffset } = useScrollContext();

  return (
    <div
      className={classNames(styles.scrollProgress)}
      style={{
        background: `conic-gradient(from 0deg, rgb(206, 206, 206) ${
          scrollOffset * 360
        }deg, rgba(255, 255, 255, 0.11) 0deg)`,
      }}
    >
      <div className={classNames(styles.bottomNavContainer)}>
        <ul className={classNames(styles.bottomNavBar)}>
          <li>
            <div className={classNames(styles.burgerContainer)}>
              <div
                className={classNames(styles.burgerLines, styles.topLine)}
              ></div>
              <div
                className={classNames(styles.burgerLines, styles.middleLine)}
              ></div>
              <div
                className={classNames(styles.burgerLines, styles.bottomLine)}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
