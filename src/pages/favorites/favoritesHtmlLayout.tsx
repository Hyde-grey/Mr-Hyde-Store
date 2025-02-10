import { memo, useContext, useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import { Collection } from "../../hooks/useGetCollections";
import useScreenSize from "../../hooks/useScreenSize";

import styles from "./favorites.module.css";
import { CartContext } from "../../contexts/CartContext";

const FavoritesHtmlLayout = memo(
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
    const { addToCart } = useContext(CartContext);

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
        <div className={styles.favoritesContainer}>
          <div className={styles.favoritesHero}>
            <h1 style={{ fontSize: `${fontSize}rem` }}>My Favorites</h1>
          </div>
          {collections.length > 0 ? (
            <ShopCollectionSection
              collections={collections}
              favorites={favorites}
              setFavorites={setFavorites}
              addToCart={addToCart}
            />
          ) : (
            <div className={styles.emptyState}>
              <h2>No favorites yet</h2>
              <p>Items you favorite will appear here</p>
            </div>
          )}
        </div>
      </Scroll>
    );
  }
);

export default FavoritesHtmlLayout;
