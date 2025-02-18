import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import HomeLayout from "./homeLayout";

import { useGetCollections } from "../../hooks/useGetCollections.tsx";

import { ChromeSpaceModel } from "../../components/models/ChromeSpace.tsx";
import Spiral from "../../components/Spiral.tsx";
import { ChromeHeartRingModel } from "../../components/models/ChromeHeartRing.tsx";
import { DiamondModel } from "../../components/models/Diamond.tsx";
import { ChromeCrossModel } from "../../components/models/ChromeCross.tsx";

const Home = () => {
  const collections = useGetCollections();

  const models = [ChromeHeartRingModel, DiamondModel, ChromeCrossModel];

  return (
    <MainCanvas numberOfPages={4}>
      <ChromeSpaceModel />
      <Spiral models={models} radius={10} />
      <HomeLayout collections={collections} />
    </MainCanvas>
  );
};

export default Home;
