import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import HomeLayout from "./homeLayout";

import { useGetCollections } from "../../hooks/useGetCollections.tsx";
import { AstroAnimatedModel } from "../../components/models/AstroAnimated.tsx";

const Home = () => {
  const collections = useGetCollections();

  return (
    <MainCanvas numberOfPages={4}>
      <AstroAnimatedModel />
      <HomeLayout collections={collections} />
    </MainCanvas>
  );
};

export default Home;
