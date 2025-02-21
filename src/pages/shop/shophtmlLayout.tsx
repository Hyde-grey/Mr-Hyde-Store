import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import { Collection, Product } from "../../hooks/useGetCollections";
import styles from "./shop.module.css";
import { memo, useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

const ShopHtmlLayout = memo(
  ({
    collections,
    favorites,
    setFavorites,
    addToCart,
  }: {
    collections: Collection[];
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
    addToCart: (product: Product, size: string) => void;
  }) => {
    const { isMobile } = useScreenSize();
    const scroll = useScroll();
    const [fontSize, setFontSize] = useState(isMobile ? 3 : 10);

    useEffect(() => {
      console.log("isMobile", isMobile);
      if (isMobile) {
        setFontSize(3);
      } else {
        setFontSize(10);
      }
    }, []);

    useFrame(() => {
      const baseSize = isMobile ? 3 : 10;
      const scrollMultiplier = isMobile ? 10 : 55;
      setFontSize(baseSize - scroll.offset * scrollMultiplier);
    });

    return (
      <Scroll html>
        <div className={styles.shopContainer}>
          <div className={styles.shopHero}>
            <h1 className={styles.title} style={{ fontSize: `${fontSize}rem` }}>
              Collections
            </h1>
          </div>
          <ShopCollectionSection
            collections={collections}
            favorites={favorites}
            setFavorites={setFavorites}
            addToCart={addToCart}
          />
        </div>
      </Scroll>
    );
  }
);

export default ShopHtmlLayout;
