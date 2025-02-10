import { Collection } from "../../hooks/useGetCollections";
import ProductCard from "../productCard/productCard";
import { memo } from "react";

import styles from "./shopCollectionSection.module.css";

const ShopCollectionSection = memo(
  ({
    collections,
    favorites,
    setFavorites,
  }: {
    collections: Collection[];
    favorites: number[];
    setFavorites: (favorites: number[]) => void;
  }) => {
    return (
      <div className={styles.shopCollectionSection}>
        {collections.map(({ name, products }, index) => (
          <div className={styles.collectionSection} key={index}>
            <div className={styles.collectionTitle}>
              <h2>{name}</h2>
              <div className={styles.collectionDivider}></div>
            </div>
            <div className={styles.productsContainer}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default ShopCollectionSection;
