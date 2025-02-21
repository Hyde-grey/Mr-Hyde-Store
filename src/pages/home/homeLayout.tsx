import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Section from "../../components/section/Section";
import useScreenSize from "../../hooks/useScreenSize";
import { Collection } from "../../hooks/useGetCollections";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import stylesScroll from "../../components/ScrollIndicator/ScrollIndicator.module.css";
import { useState } from "react";

const HomeLayout = ({ collections }: { collections: Collection[] }) => {
  const { isMobile } = useScreenSize();
  const scroll = useScroll();
  const [fontSize, setFontSize] = useState(isMobile ? 3 : 10);

  useFrame(() => {
    const baseSize = isMobile ? 3 : 10;
    const scrollMultiplier = isMobile ? 10 : 55;
    setFontSize(baseSize - scroll.offset * scrollMultiplier);
  });

  return (
    <Scroll style={{ width: "100%" }} html>
      <div className={styles.hero}>
        <h1 style={{ fontSize: `${fontSize}rem` }}>Mr. Hyde Store</h1>
        <div className={stylesScroll.scrollIndicatorContainer}>
          <motion.div className={stylesScroll.indicator}>
            <p className={stylesScroll.text}>
              {isMobile ? "Swipe up to explore" : "Scroll down to explore"}
            </p>
            <BsChevronDown className={stylesScroll.arrow} />
          </motion.div>
        </div>
      </div>
      <div className={styles.container}>
        {collections.map(({ imageUrl, name, description }, index) => (
          <Section
            key={index}
            img={imageUrl}
            title={name}
            description={description}
            current={index}
          />
        ))}
      </div>
    </Scroll>
  );
};

export default HomeLayout;
