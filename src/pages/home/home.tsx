import * as THREE from "three";
import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import Spiral from "../../components/Spiral";
import HomeLayout from "./homeLayout";

import "./home.css";
import { useGetCollections } from "../../hooks/useGetCollections.tsx";

const Home = () => {
  const collections = useGetCollections();
  console.log(collections);

  return (
    <>
      <MainCanvas numberOfPages={4} cameraPosition={[6, 0, 50]}>
        <Spiral initialPosition={new THREE.Vector3(7, 1.8, 15)} />
        <HomeLayout collections={collections} />
      </MainCanvas>
    </>
  );
};

export default Home;
