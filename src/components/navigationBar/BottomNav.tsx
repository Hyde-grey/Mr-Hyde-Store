import { useScrollContext } from "../../contexts/ScrollContext";
import classNames from "classnames";
import styles from "./BottomNav.module.css";
import { useState } from "react";

const BottomNav = () => {
  const { scrollOffset } = useScrollContext();
  const [isClicked, setIsClicked] = useState(false);

  const burgerClickHandler = () => {
    setIsClicked(!isClicked);
    console.log("is clicked", isClicked);
  };

  return (
    <div
      onClick={() => {
        burgerClickHandler();
      }}
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
            <div
              className={classNames(styles.burgerContainer, {
                [styles.burgerClicked]: isClicked,
              })}
            >
              <div
                className={classNames(styles.burgerLines, styles.topLine, {
                  [styles.topLineClicked]: isClicked,
                })}
              ></div>
              <div
                className={classNames(styles.burgerLines, styles.middleLine, {
                  [styles.middleLineClicked]: isClicked,
                })}
              ></div>
              <div
                className={classNames(styles.burgerLines, styles.bottomLine, {
                  [styles.bottomLineClicked]: isClicked,
                })}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
