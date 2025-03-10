import MainCanvas from "../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../hooks/useGetCollections";
import ShopHtmlLayout from "./shophtmlLayout";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { CartContext } from "../../contexts/CartContext";
import useScreenSize from "../../hooks/useScreenSize";

import { ChromeSpaceModel } from "../../components/models/ChromeSpace";

const Shop = () => {
  const collections = useGetCollections();
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { isMobile } = useScreenSize();

  const handleSetFavorites = (newFavorites: number[]) => {
    const added = newFavorites.filter((id) => !favorites.includes(id));
    const removed = favorites.filter((id) => !newFavorites.includes(id));

    added.forEach((id) => addToFavorites(id));
    removed.forEach((id) => removeFromFavorites(id));
  };

  return (
    <MainCanvas numberOfPages={isMobile ? 7 : 4} cameraPosition={[0, 0, 16]}>
      <ChromeSpaceModel
        position={[0, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
        rotation={[0, 0, 0]}
      />
      <ShopHtmlLayout
        collections={collections}
        favorites={favorites}
        setFavorites={handleSetFavorites}
        addToCart={addToCart}
      />
    </MainCanvas>
  );
};

export default Shop;
