import { Collection } from "../../hooks/useGetCollections";
import ProductCard from "../productCard/productCard";
import styles from "./shopCollectionSection.module.css";

const ShopCollectionSection = ({
  collections,
}: {
  collections: Collection[];
}) => {
  return (
    <>
      {collections.map(({ name, products }, index) => (
        <div className={styles.collectionSection} key={index}>
          <div className={styles.collectionTitle}>
            <h2>{name}</h2>
            <div className={styles.collectionDivider}></div>
          </div>
          <div className={styles.productsContainer}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default ShopCollectionSection;
