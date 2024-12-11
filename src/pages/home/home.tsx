import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import HomeLayout from "./homeLayout";
import Spiral from "../../components/Spiral";
import "./home.css";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import useScreenSize from "../../components/hooks/useWindowSize";

const Home = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className="main-container">
      <NavigationBar />
      <Canvas camera={{ position: [17, 4, 0], fov: 35 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[30, 35, 5]} intensity={4} />
        <pointLight position={[0, 10, 0]} intensity={15} />
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
