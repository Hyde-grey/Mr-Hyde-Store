import MainCanvas from "../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../hooks/useGetCollections";
import FavoritesHtmlLayout from "./favoritesHtmlLayout.tsx";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import useScreenSize from "../../hooks/useScreenSize";

const Favorites = () => {
  const collections = useGetCollections();
  const { isMobile } = useScreenSize();
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  // Filter collections to only include favorited products
  const favoritedCollections = collections
    .map((collection) => ({
      ...collection,
      products: collection.products.filter((product) =>
        favorites.includes(product.id)
      ),
    }))
    .filter((collection) => collection.products.length > 0);

  const handleSetFavorites = (newFavorites: number[]) => {
    const added = newFavorites.filter((id) => !favorites.includes(id));
    const removed = favorites.filter((id) => !newFavorites.includes(id));

    added.forEach((id) => addToFavorites(id));
    removed.forEach((id) => removeFromFavorites(id));
  };

  const calculatePages = () => {
    if (favoritedCollections.length === 0) return 2;

    const itemsPerPage = isMobile ? 2 : 4;
    const totalItems = favoritedCollections.reduce(
      (acc, collection) => acc + collection.products.length,
      0
    );
    const contentPages = Math.ceil(totalItems / itemsPerPage);

    return Math.max(2, contentPages + 1);
  };

  return (
    <MainCanvas numberOfPages={calculatePages()}>
      <FavoritesHtmlLayout
        collections={favoritedCollections}
        favorites={favorites}
        setFavorites={handleSetFavorites}
      />
    </MainCanvas>
  );
};

export default Favorites;
