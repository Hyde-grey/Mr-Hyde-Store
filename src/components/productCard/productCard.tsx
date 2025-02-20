import { useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./productCard.module.css";
import { Product } from "../../hooks/useGetCollections";
import Button from "../button/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type ProductCardProps = {
  product: Product;
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
  addToCart: (product: Product, size: string) => void;
};

const ProductCard = memo(
  ({ product, favorites, setFavorites, addToCart }: ProductCardProps) => {
    const { imageUrls, name, description, price, sizes, id } = product;

    const [selectedSize, setSelectedSize] = useState<string>(
      sizes.length > 0 ? sizes[0].size.toString() : ""
    );

    const handleFavoriteClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (favorites.includes(id)) {
        setFavorites(favorites.filter((favId) => favId !== id));
      } else {
        setFavorites([...favorites, id]);
      }
    };

    const handleAddToCart = () => {
      addToCart(product, selectedSize);
    };

    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedSize(event.target.value);
    };

    return (
      <div className={styles.productCardContainer}>
        <div className={styles.productCardImage}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {imageUrls.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img src={imageUrl} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className={styles.invisibleButton}
            onClick={handleFavoriteClick}
          >
            {favorites.includes(id) ? (
              <FaHeart className={styles.favoriteButton} />
            ) : (
              <FaRegHeart className={styles.favoriteButton} />
            )}
          </button>
        </div>

        <div className={styles.productCardInfo}>
          <div className={styles.productCardInfoTitle}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.productCardPriceContainer}>
            <div className={styles.productCardInfoSizes}>
              <p>Sizes :</p>
              <select value={selectedSize} onChange={handleSizeChange}>
                {sizes.map((size, index) => (
                  <option key={index} value={size.size}>
                    {size.size}
                  </option>
                ))}
              </select>
            </div>
            <h4>{price} £</h4>
          </div>
          <div className={styles.productCardButton}>
            <Button buttonType="button" onClick={handleAddToCart}>
              <p>Add to cart</p>
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default ProductCard;
