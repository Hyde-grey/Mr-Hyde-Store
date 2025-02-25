import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CollectionProductsSection from "../collectionProductsSection/CollectionProductsSection";
import { Collection, Product } from "../../hooks/useGetCollections";
import styles from "./CollectionLayout.module.css";
import { memo, useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

const CollectionLayout = memo(
  ({
    collection,
    favorites,
    setFavorites,
    addToCart,
  }: {
    collection: Collection;
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
    addToCart: (product: Product, size: string) => void;
  }) => {
    const { isMobile } = useScreenSize();
    const scroll = useScroll();
    const [fontSize, setFontSize] = useState(isMobile ? 3 : 10);

    useEffect(() => {
      if (isMobile) {
        setFontSize(3);
      } else {
        setFontSize(10);
      }
    }, [isMobile]);

    useFrame(() => {
      const baseSize = isMobile ? 3 : 8;
      const scrollMultiplier = isMobile ? 1 : 3;
      setFontSize(baseSize - scroll.offset * scrollMultiplier);
    });

    return (
      <Scroll html>
        <div className={styles.collectionContainer}>
          <div className={styles.collectionHero}>
            <h1 className={styles.title} style={{ fontSize: `${fontSize}rem` }}>
              {collection.name}
            </h1>
          </div>
          <CollectionProductsSection
            collections={[collection]}
            favorites={favorites}
            setFavorites={setFavorites}
            addToCart={addToCart}
          />
        </div>
      </Scroll>
    );
  }
);

export default CollectionLayout;
