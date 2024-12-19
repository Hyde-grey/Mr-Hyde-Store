import classNames from "classnames";
import { useScrollContext } from "../../contexts/ScrollContext";
import { useMenuContext } from "../../contexts/MenuContext";

import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const { scrollOffset } = useScrollContext();
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  const burgerClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <div
          className={classNames(styles.burgerContainer, {
            [styles.burgerClicked]: isMenuOpen,
          })}
        >
          <div
            className={classNames(styles.burgerLines, styles.topLine, {
              [styles.topLineClicked]: isMenuOpen,
            })}
          ></div>
          <div
            className={classNames(styles.burgerLines, styles.middleLine, {
              [styles.middleLineClicked]: isMenuOpen,
            })}
          ></div>
          <div
            className={classNames(styles.burgerLines, styles.bottomLine, {
              [styles.bottomLineClicked]: isMenuOpen,
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
