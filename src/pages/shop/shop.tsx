import MainCanvas from "../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../hooks/useGetCollections";
import ShopHtmlLayout from "./shophtmlLayout";
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { CartContext } from "../../contexts/CartContext";
import useScreenSize from "../../hooks/useScreenSize";

const Shop = () => {
  const collections = useGetCollections();
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { cart } = useContext(CartContext);
  const { isMobile } = useScreenSize();

  const handleSetFavorites = (newFavorites: number[]) => {
    const added = newFavorites.filter((id) => !favorites.includes(id));
    const removed = favorites.filter((id) => !newFavorites.includes(id));

    added.forEach((id) => addToFavorites(id));
    removed.forEach((id) => removeFromFavorites(id));
  };

  useEffect(() => {
    console.log("Current cart state:", cart);
    console.log("LocalStorage cart:", localStorage.getItem("cart"));
  }, [cart]);

  return (
    <MainCanvas numberOfPages={isMobile ? 7 : 4}>
      <ShopHtmlLayout
        collections={collections}
        favorites={favorites}
        setFavorites={handleSetFavorites}
      />
    </MainCanvas>
  );
};

export default Shop;
