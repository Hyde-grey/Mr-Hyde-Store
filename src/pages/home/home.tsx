import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import HomeLayout from "./homeLayout";

import { useGetCollections } from "../../hooks/useGetCollections.tsx";

import { ChromeSpaceModel } from "../../components/models/ChromeSpace.tsx";

const Home = () => {
  const collections = useGetCollections();

  return (
    <MainCanvas numberOfPages={4}>
      <ChromeSpaceModel />
      <HomeLayout collections={collections} />
    </MainCanvas>
  );
};

export default Home;
