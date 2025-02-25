import MainCanvas from "../../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../../hooks/useGetCollections";
import CollectionLayout from "../../../components/collectionLayout/CollectionLayout";
import { useContext } from "react";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { CartContext } from "../../../contexts/CartContext";
import useScreenSize from "../../../hooks/useScreenSize";
import { AstroModel } from "../../../components/models/Astro";
import Diamond from "../../../components/models/Diamond/BlackDiamond";
import { Float } from "@react-three/drei";
const DarkerThanBlack = () => {
  const collections = useGetCollections();
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { isMobile } = useScreenSize();

  const darkerThanBlackCollection = collections.find(
    (collection) => collection.name === "Darker Than Black Collection"
  );

  const handleSetFavorites = (newFavorites: number[]) => {
    const added = newFavorites.filter((id) => !favorites.includes(id));
    const removed = favorites.filter((id) => !newFavorites.includes(id));

    added.forEach((id) => addToFavorites(id));
    removed.forEach((id) => removeFromFavorites(id));
  };

  if (!darkerThanBlackCollection) return null;

  return (
    <MainCanvas numberOfPages={isMobile ? 2 : 2} cameraPosition={[0, 5, 20]}>
      <Float>
        <Diamond
          position={isMobile ? [4, 9, 0] : [20, 4, 10]}
          scale={isMobile ? 1.3 : 1.5}
        />
      </Float>
      <AstroModel scale={0.35} position={[20, -30, 0]} rotation={[0, 3, 0]} />
      <CollectionLayout
        collection={darkerThanBlackCollection}
        favorites={favorites}
        setFavorites={handleSetFavorites}
        addToCart={addToCart}
      />
    </MainCanvas>
  );
};

export default DarkerThanBlack;
