import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import HomeLayout from "./homeLayout";

import { useGetCollections } from "../../hooks/useGetCollections.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { ChromeSpaceModel } from "../../components/models/ChromeSpace.tsx";
import Spiral from "../../components/Spiral.tsx";
import { ChromeHeartRingModel } from "../../components/models/ChromeHeartRing.tsx";
import { DiamondModel } from "../../components/models/Diamond.tsx";
import { ChromeCrossModel } from "../../components/models/ChromeCross.tsx";
import { useAnimation } from "../../context/AnimationContext.tsx";

const Home = () => {
  const { startAnimation, isAnimating, cleanupAnimation } = useAnimation();
  const collections = useGetCollections();
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );

  const models = [ChromeHeartRingModel, DiamondModel, ChromeCrossModel];

  const handleCollectionClick = (collectionPath: string) => {
    setSelectedCollection(collectionPath);
    startAnimation();
  };

  useEffect(() => {
    if (!isAnimating && selectedCollection) {
      const path = `/collections/${selectedCollection}`;
      navigate(path);
      cleanupAnimation();
    }
  }, [isAnimating, selectedCollection, navigate, cleanupAnimation]);

  return (
    <MainCanvas numberOfPages={4}>
      <ChromeSpaceModel
        position={[0, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
        rotation={[0, 0, 0]}
      />
      <Spiral models={models} radius={10} />
      <HomeLayout
        collections={collections}
        onCollectionClick={handleCollectionClick}
      />
    </MainCanvas>
  );
};

export default Home;
