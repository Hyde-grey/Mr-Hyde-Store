import MainCanvas from "../../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../../hooks/useGetCollections";
import CollectionLayout from "../../../components/collectionLayout/CollectionLayout";
import { useContext } from "react";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { CartContext } from "../../../contexts/CartContext";
import useScreenSize from "../../../hooks/useScreenSize";
import { AstroModel } from "../../../components/models/Astro";
import { Float } from "@react-three/drei";
import { ChromeRingModel } from "../../../components/models/Chromering";
const ChromeHeart = () => {
  const collections = useGetCollections();
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { isMobile } = useScreenSize();

  const chromeHeartCollection = collections.find(
    (collection) => collection.name === "Chrome Heart Collection"
  );

  const handleSetFavorites = (newFavorites: number[]) => {
    const added = newFavorites.filter((id) => !favorites.includes(id));
    const removed = favorites.filter((id) => !newFavorites.includes(id));

    added.forEach((id) => addToFavorites(id));
    removed.forEach((id) => removeFromFavorites(id));
  };

  if (!chromeHeartCollection) return null;

  return (
    <MainCanvas numberOfPages={isMobile ? 2.8 : 2} cameraPosition={[0, 5, 20]}>
      <Float>
        <ChromeRingModel
          scale={[0.9, 0.9, 0.9]}
          position={isMobile ? [0.5, 1.8, 0] : [3, 1.3, 0]}
        />
      </Float>
      <AstroModel scale={0.15} position={[2, -6.2, 0]} rotation={[0, 3, 0]} />
      <CollectionLayout
        collection={chromeHeartCollection}
        favorites={favorites}
        setFavorites={handleSetFavorites}
        addToCart={addToCart}
      />
    </MainCanvas>
  );
};

export default ChromeHeart;
