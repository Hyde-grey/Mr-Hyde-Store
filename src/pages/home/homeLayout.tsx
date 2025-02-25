import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Section from "../../components/section/Section";
import useScreenSize from "../../hooks/useScreenSize";
import { Collection } from "../../hooks/useGetCollections";
import styles from "./home.module.css";
import { useState } from "react";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";

type HomeLayoutProps = {
  collections: Collection[];
  onCollectionClick: (collectionPath: string) => void;
};

const HomeLayout = ({ collections, onCollectionClick }: HomeLayoutProps) => {
  const { isMobile } = useScreenSize();
  const scroll = useScroll();
  const [fontSize, setFontSize] = useState(isMobile ? 3 : 10);

  useFrame(() => {
    const baseSize = isMobile ? 3 : 10;
    const scrollMultiplier = isMobile ? 10 : 55;
    setFontSize(baseSize - scroll.offset * scrollMultiplier);
  });

  return (
    //@ts-ignore
    <Scroll style={{ width: "100%" }} html>
      <div className={styles.hero}>
        <h1 style={{ fontSize: `${fontSize}rem` }}>Mr. Hyde Store</h1>
        <ScrollIndicator />
      </div>
      <div className={styles.container}>
        {collections.map(({ imageUrl, name, description, path }, index) => (
          <Section
            key={index}
            img={imageUrl}
            title={name}
            description={description}
            current={index}
            onClick={() => onCollectionClick(path)}
          />
        ))}
      </div>
    </Scroll>
  );
};

export default HomeLayout;
