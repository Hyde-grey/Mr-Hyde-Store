import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import HomeLayout from "./homeLayout";
import "./home.css";

const Home = () => {
  return (
    <>
      <Canvas camera={{ position: [15, 1, 5], fov: 40 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[30, 35, 5]} intensity={2} />
        <pointLight position={[0, -10, -10]} intensity={50} />
        <OrbitControls enableZoom={false} />
        <Stars />
        <ScrollControls pages={4}>
          <HomeLayout />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default Home;
