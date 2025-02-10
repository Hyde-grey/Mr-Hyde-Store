import MainCanvas from "../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../hooks/useGetCollections";
import FavoritesHtmlLayout from "./favoritesHtmlLayout.tsx";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const Favorites = () => {
  const collections = useGetCollections();
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

  return (
    <MainCanvas numberOfPages={4}>
      <FavoritesHtmlLayout
        collections={favoritedCollections}
        favorites={favorites}
        setFavorites={handleSetFavorites}
      />
    </MainCanvas>
  );
};

export default Favorites;
