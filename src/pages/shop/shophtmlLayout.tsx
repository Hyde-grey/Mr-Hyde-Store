import { memo, useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import { Collection } from "../../hooks/useGetCollections";
import useScreenSize from "../../hooks/useScreenSize";

import styles from "./shop.module.css";

const ShopHtmlLayout = memo(
  ({
    collections,
    favorites,
    setFavorites,
  }: {
    collections: Collection[];
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
  }) => {
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
          <ShopCollectionSection
            collections={collections}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </div>
      </Scroll>
    );
  }
);

export default ShopHtmlLayout;
