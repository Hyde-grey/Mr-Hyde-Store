import * as THREE from "three";
import { Scroll } from "@react-three/drei";
import MainCanvas from "../../components/MainCanvas/MainCanvas";
import { useGetCollections } from "../../hooks/useGetCollections";
import ShopCollectionSection from "../../components/shopCollectionSection/shopCollectionsection";
import styles from "./shop.module.css";
import { ChromeGrillModel } from "../../components/models/ChromeGrill";
import Diamonds from "../../components/models/Diamond/BlackDiamond";

const Shop = () => {
  const collections = useGetCollections();

  return (
    <MainCanvas
      numberOfPages={collections.length + 1}
      cameraPosition={[6, 0, 50]}
    >
      <Diamonds position={new THREE.Vector3(0, 5, 0)} />
      <ChromeGrillModel />
      <Scroll html>
        <div className={styles.shopContainer}>
          <div className={styles.shopHero}>
            <h1>Collections</h1>
          </div>
          <ShopCollectionSection collections={collections} />
        </div>
      </Scroll>
    </MainCanvas>
  );
};

export default Shop;
