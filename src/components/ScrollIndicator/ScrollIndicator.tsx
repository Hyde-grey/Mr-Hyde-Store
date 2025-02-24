import { RiScrollToBottomLine } from "react-icons/ri";
import { MdOutlineSwipeUp } from "react-icons/md";
import styles from "./ScrollIndicator.module.css";
import classNames from "classnames";
import useScreenSize from "../../hooks/useScreenSize";

import { useState } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ScrollIndicator = () => {
  const { isMobile } = useScreenSize();
  const [isPassedThreshold, setIsPassedThreshold] = useState(false);
  const scroll = useScroll();

  useFrame(() => {
    setIsPassedThreshold(scroll.offset > 0.05);
  });

  return (
    <div
      className={classNames(styles.scrollIndicatorContainer, {
        [styles.hidden]: isPassedThreshold,
      })}
    >
      <div className={styles.indicator}>
        <p className={styles.text}>
          {isMobile ? "Swipe up to explore" : "Scroll down to explore"}
        </p>
        {isMobile ? (
          <MdOutlineSwipeUp className={styles.arrow} />
        ) : (
          <RiScrollToBottomLine className={styles.arrow} />
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
