import { Scroll, useScroll } from "@react-three/drei";

import Section from "../../components/section/Section";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { Collection } from "../../hooks/useGetCollections";
import { BsChevronDown } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import styles from "./home.module.css";
import stylesScroll from "../../components/ScrollIndicator/ScrollIndicator.module.css";

const HomeLayout = ({ collections }: { collections: Collection[] }) => {
  const controls = useAnimation();
  const scroll = useScroll();
  const { isMobile } = useScreenSize();
  const [fontSize, setFontSize] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useFrame(() => {
    if (isMobile) {
      const scrollY = scroll.offset;
      setFontSize(3 - scrollY * 10);
      setOpacity(1 - scrollY * 10);
    } else {
      const scrollY = scroll.offset;
      setFontSize(10 - scrollY * 55);
      setOpacity(1 - scrollY * 55);
    }
  });

  useEffect(() => {
    const startAnimation = async () => {
      try {
        await controls.start({
          y: [0, 20, 39],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        });
      } catch (error) {
        console.error("Animation failed to start:", error);
      }
    };

    startAnimation();

    return () => {
      controls.stop();
    };
  }, []);

  return (
    <Scroll style={{ width: "100%" }} html>
      <div className={styles.hero}>
        <h1 style={{ fontSize: `${fontSize}rem` }}>Mr. Hyde Store</h1>
        <div
          className={stylesScroll.scrollIndicatorContainer}
          style={{ opacity: Math.max(0, opacity) }}
        >
          <motion.div className={stylesScroll.indicator} animate={controls}>
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
