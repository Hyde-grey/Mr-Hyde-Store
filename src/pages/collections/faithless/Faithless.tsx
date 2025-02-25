import MainCanvas from "../../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../../hooks/useGetCollections";
import CollectionLayout from "../../../components/collectionLayout/CollectionLayout";
import { useContext } from "react";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { CartContext } from "../../../contexts/CartContext";
import useScreenSize from "../../../hooks/useScreenSize";
import { ChromeCrossModel } from "../../../components/models/ChromeCross";
import { AstroModel } from "../../../components/models/Astro";
import { Float } from "@react-three/drei";
const Faithless = () => {
  const collections = useGetCollections();
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { isMobile } = useScreenSize();

  const faithlessCollection = collections.find(
    (collection) => collection.name === "Faithless Collection"
  );

  const handleSetFavorites = (newFavorites: number[]) => {
    const added = newFavorites.filter((id) => !favorites.includes(id));
    const removed = favorites.filter((id) => !newFavorites.includes(id));

    added.forEach((id) => addToFavorites(id));
    removed.forEach((id) => removeFromFavorites(id));
  };

  if (!faithlessCollection) return null;

  return (
    <MainCanvas numberOfPages={isMobile ? 2.15 : 2} cameraPosition={[0, 5, 20]}>
      <Float>
        <ChromeCrossModel
          scale={0.6}
          position={isMobile ? [1, 1.1, 0] : [3, 0.8, 0]}
        />
      </Float>
      <AstroModel scale={0.15} position={[2, -6.2, 0]} rotation={[0, 3, 0]} />
      <CollectionLayout
        collection={faithlessCollection}
        favorites={favorites}
        setFavorites={handleSetFavorites}
        addToCart={addToCart}
      />
    </MainCanvas>
  );
};

export default Faithless;
