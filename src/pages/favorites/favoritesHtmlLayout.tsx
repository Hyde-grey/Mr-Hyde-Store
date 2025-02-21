import { memo, useContext } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import { Collection } from "../../hooks/useGetCollections";
import { useDynamicFontSize } from "../../hooks/useDynamicFontSize";

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
    const { fontSize, hasInitialized, updateFontSize } = useDynamicFontSize();
    const { addToCart } = useContext(CartContext);

    useFrame(() => {
      const scrollY = scroll.offset;
      updateFontSize(scrollY);
    });

    return (
      <Scroll html>
        <div className={styles.favoritesContainer}>
          <div className={styles.favoritesHero}>
            <h1
              className={styles.title}
              style={
                hasInitialized ? { fontSize: `${fontSize}rem` } : undefined
              }
            >
              My Favorites
            </h1>
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
