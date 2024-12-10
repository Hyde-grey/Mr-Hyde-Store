import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import HomeLayout from "./homeLayout";
import "./home.css";
import Spiral from "../../components/Spiral";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice =
      /android|iPad|iPhone|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isMobile) {
        e.preventDefault();
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isMobile) {
        e.preventDefault();
      }
    };

    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [isMobile]);

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
