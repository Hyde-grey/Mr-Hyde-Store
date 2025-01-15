import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ScrollUpdater } from "../ScrollUpdater";
import useScreenSize from "../../hooks/useScreenSize";

export type MainCanvasProps = {
  children: React.ReactNode;
  numberOfPages: number;
};
const MainCanvas = ({ children, numberOfPages }: MainCanvasProps) => {
  const { isMobile } = useScreenSize();
  return (
    <Canvas camera={{ position: [17, 4, 0], fov: 35 }}>
      {/* @ts-expect-error mismatch library types */}
      <ambientLight intensity={3} />
      {/* @ts-expect-error mismatch library types */}
      <directionalLight position={[30, 35, 5]} intensity={4} />
      {/* @ts-expect-error mismatch library types */}
      <pointLight position={[0, 10, 0]} intensity={15} />
      {isMobile ? null : <OrbitControls enableZoom={false} />}
      <ScrollControls pages={numberOfPages} enabled>
        <Stars />
        {/* TODO: Find a better way to implement scroll event listener as useFrame cannot be used outside of Canvas */}
        <ScrollUpdater />
        {children}
      </ScrollControls>
    </Canvas>
  );
};

export default MainCanvas;
