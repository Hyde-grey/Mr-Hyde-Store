import { Scroll, useScroll } from "@react-three/drei";

import Section from "../../components/section/Section";
import { useFrame } from "@react-three/fiber";
import useScreenSize from "../../hooks/useScreenSize";
import { Collection } from "../../hooks/useGetCollections";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import stylesScroll from "../../components/ScrollIndicator/ScrollIndicator.module.css";
import { useDynamicFontSize } from "../../hooks/useDynamicFontSize";

const HomeLayout = ({ collections }: { collections: Collection[] }) => {
  const scroll = useScroll();
  const { isMobile } = useScreenSize();
  const { fontSize, hasInitialized, updateFontSize } = useDynamicFontSize();

  useFrame(() => {
    const scrollY = scroll.offset;
    updateFontSize(scrollY);
  });

  return (
    <Scroll style={{ width: "100%" }} html>
      <div className={styles.hero}>
        <h1 style={hasInitialized ? { fontSize: `${fontSize}rem` } : undefined}>
          Mr. Hyde Store
        </h1>
        <div
          className={stylesScroll.scrollIndicatorContainer}
          style={{
            opacity: Math.max(0, 1 - scroll.offset * (isMobile ? 10 : 55)),
          }}
        >
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
