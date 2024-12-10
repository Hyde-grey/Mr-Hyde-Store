import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import HomeLayout from "./homeLayout";
import "./home.css";
import Spiral from "../../components/Spiral";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Canvas camera={{ position: [17, 4, 0], fov: 35 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[30, 35, 5]} intensity={2} />
        <pointLight position={[0, -10, -10]} intensity={50} />
        <OrbitControls enableZoom={false} enabled={!isMobile} />
        <Stars />
        <ScrollControls pages={4}>
          <Spiral />
          <HomeLayout />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default Home;
