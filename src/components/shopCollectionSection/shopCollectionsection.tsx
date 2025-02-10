import { Collection, Product } from "../../hooks/useGetCollections";
import ProductCard from "../productCard/productCard";
import { memo } from "react";

import styles from "./shopCollectionSection.module.css";

const ShopCollectionSection = memo(
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

export default ShopCollectionSection;
