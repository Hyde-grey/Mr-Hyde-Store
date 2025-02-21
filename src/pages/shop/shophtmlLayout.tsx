import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import { Collection, Product } from "../../hooks/useGetCollections";
import { useDynamicFontSize } from "../../hooks/useDynamicFontSize";

import styles from "./shop.module.css";
import { memo } from "react";

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
    const scroll = useScroll();
    const { fontSize, hasInitialized, updateFontSize } = useDynamicFontSize();

    useFrame(() => {
      const scrollY = scroll.offset;
      updateFontSize(scrollY);
    });

    return (
      <Scroll html>
        <div className={styles.shopContainer}>
          <div className={styles.shopHero}>
            <h1
              className={styles.title}
              style={
                hasInitialized ? { fontSize: `${fontSize}rem` } : undefined
              }
            >
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
