import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./productCard.module.css";
import { Product } from "../../hooks/useGetCollections";
import Button from "../button/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }: { product: Product }) => {
  const { imageUrls, name, description, price, sizes } = product;
  const defaultSize = sizes.length > 0 ? sizes[0].size : "";
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [isFavorite, setIsFavorite] = useState(false);

  console.log(imageUrls);

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
    console.log(product.id);
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
        <button className={styles.invisibleButton} onClick={handleHeartClick}>
          {isFavorite ? (
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
          <Button buttonType="submit">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
