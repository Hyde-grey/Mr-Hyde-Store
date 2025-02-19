import { Scroll, useScroll } from "@react-three/drei";

import styles from "./home.module.css";
import Section from "../../components/section/Section";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { Collection } from "../../hooks/useGetCollections";

const HomeLayout = ({ collections }: { collections: Collection[] }) => {
  const scroll = useScroll();
  const { isMobile } = useScreenSize();
  const [fontSize, setFontSize] = useState(0);

  useFrame(() => {
    if (isMobile) {
      const scrollY = scroll.offset;
      setFontSize(3 - scrollY * 10);
    } else {
      const scrollY = scroll.offset;
      setFontSize(10 - scrollY * 55);
    }
  });

  return (
    <Scroll style={{ width: "100%" }} html>
      <div className={styles.hero}>
        <h1 style={{ fontSize: `${fontSize}rem` }}>Mr. Hyde Store</h1>
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
