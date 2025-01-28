import * as THREE from "three";
import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import Spiral from "../../components/Spiral";
import HomeLayout from "./homeLayout";
import { ChromeHeartRingModel } from "../../components/models/ChromeHeartRing";
import Diamond from "../../components/models/Diamond/BlackDiamond";
import { ChromeCrossModel } from "../../components/models/ChromeCross";

import "./home.css";
import { useGetCollections } from "../../hooks/useGetCollections.tsx";

const Home = () => {
  const collections = useGetCollections();

  return (
    <>
      <MainCanvas numberOfPages={4} cameraPosition={[6, 0, 50]}>
        <Spiral
          models={[ChromeCrossModel]}
          initialPosition={new THREE.Vector3(-5, 17, 10)}
          initialRotation={Math.PI / 2}
          rotationDirection="counterclockwise"
        />
        <Spiral
          models={[Diamond]}
          initialPosition={new THREE.Vector3(-1, 12, 15)}
          initialRotation={Math.PI / 2}
          scrollSpeed={20}
          radius={7}
        />
        <Spiral
          models={[ChromeHeartRingModel]}
          initialPosition={new THREE.Vector3(1.9, 2.5, 10)}
          initialRotation={Math.PI / 2}
          rotationDirection="counterclockwise"
        />
        <HomeLayout collections={collections} />
      </MainCanvas>
    </>
  );
};

export default Home;
