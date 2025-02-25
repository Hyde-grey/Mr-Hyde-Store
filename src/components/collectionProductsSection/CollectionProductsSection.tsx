import { Collection, Product } from "../../hooks/useGetCollections";
import ProductCard from "../productCard/productCard";
import { memo } from "react";
import useScreenSize from "../../hooks/useScreenSize";

import styles from "./CollectionProductsSection.module.css";

const CollectionProductsSection = memo(
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
    const { isMobile, isTablet } = useScreenSize();

    return (
      <div
        className={`${styles.collectionProductsSection} ${
          isMobile || isTablet ? styles.mobileView : ""
        }`}
      >
        {collections.map(({ products }, index) => (
          <div className={styles.productsSection} key={index}>
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default CollectionProductsSection;
