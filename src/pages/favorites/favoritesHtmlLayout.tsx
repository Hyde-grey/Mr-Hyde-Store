import { memo, useContext, useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import { Collection } from "../../hooks/useGetCollections";
import styles from "./favorites.module.css";
import { CartContext } from "../../contexts/CartContext";
import useScreenSize from "../../hooks/useScreenSize";

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
    const { isMobile } = useScreenSize();
    const scroll = useScroll();
    const [fontSize, setFontSize] = useState(isMobile ? 3 : 10);
    const { addToCart } = useContext(CartContext);

    useFrame(() => {
      const baseSize = isMobile ? 3 : 10;
      const scrollMultiplier = isMobile ? 10 : 55;
      setFontSize(baseSize - scroll.offset * scrollMultiplier);
    });

    return (
      <Scroll html>
        <div className={styles.favoritesContainer}>
          <div className={styles.favoritesHero}>
            <h1 className={styles.title} style={{ fontSize: `${fontSize}rem` }}>
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
