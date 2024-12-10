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
      /android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <div>
      <Canvas camera={{ position: [17, 4, 0], fov: 35 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[30, 35, 5]} intensity={2} />
        <pointLight position={[0, -10, -10]} intensity={50} />
        {isMobile ? null : <OrbitControls enableZoom={false} />}
        <Stars />
        <ScrollControls pages={4} enabled>
          <Spiral />
          <HomeLayout />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Home;
