import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import styles from "./shop.module.css";
import { Collection } from "../../hooks/useGetCollections";
import useScreenSize from "../../hooks/useScreenSize";

const ShopHtmlLayout = ({ collections }: { collections: Collection[] }) => {
  const scroll = useScroll();
  const { isMobile } = useScreenSize();
  const [fontSize, setFontSize] = useState(3);

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
    <Scroll html>
      <div className={styles.shopContainer}>
        <div className={styles.shopHero}>
          <h1 style={{ fontSize: `${fontSize}rem` }}>Collections</h1>
        </div>
        <ShopCollectionSection collections={collections} />
      </div>
    </Scroll>
  );
};

export default ShopHtmlLayout;
