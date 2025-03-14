import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { ScrollUpdater } from "../ScrollUpdater";
import useScreenSize from "../../hooks/useScreenSize";
import { Euler } from "three";

export type MainCanvasProps = {
  children: React.ReactNode;
  numberOfPages: number;
  cameraPosition?: Vector3 | [number, number, number];
  cameraRotation?: Euler;
};

const MainCanvas = ({
  children,
  numberOfPages,
  cameraPosition,
  cameraRotation,
}: MainCanvasProps) => {
  const { isTouch } = useScreenSize();

  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 20, rotation: cameraRotation }}
    >
      {/* @ts-expect-error mismatch library types */}
      <ambientLight intensity={5.6} position={[-2, 0, 5]} />
      {/* @ts-expect-error mismatch library types */}
      <directionalLight position={[2, 1, 4]} intensity={2.6} />
      {/* @ts-expect-error mismatch library types */}
      <pointLight position={[1, 4, -2]} intensity={54} />
      {!isTouch && <OrbitControls enableZoom={false} />}

      <ScrollControls
        pages={numberOfPages}
        damping={0.1}
        // Ensure touch events work properly
        eps={0.00001}
      >
        <Stars />
        {/* TODO: Find a better way to implement scroll event listener as useFrame cannot be used outside of Canvas */}
        <ScrollUpdater />
        {children}
      </ScrollControls>
    </Canvas>
  );
};

export default MainCanvas;
