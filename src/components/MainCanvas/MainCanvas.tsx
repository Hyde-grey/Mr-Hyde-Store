import { OrbitControls, ScrollControls, Stars } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { ScrollUpdater } from "../ScrollUpdater";
import useScreenSize from "../../hooks/useScreenSize";
import { Euler } from "three";
import { Suspense } from "react";

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
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        {/* @ts-expect-error mismatch library types */}
        <ambientLight intensity={5.6} position={[-2, 0, 5]} />
        {/* @ts-expect-error mismatch library types */}
        <directionalLight position={[2, 1, 4]} intensity={2.6} />
        {/* @ts-expect-error mismatch library types */}
        <pointLight position={[1, 4, -2]} intensity={54} />
        {!isTouch && <OrbitControls enableZoom={false} />}

        <ScrollControls
          pages={numberOfPages}
          damping={0.15}
          eps={0.0001}
          horizontal={false}
          infinite={false}
          distance={1}
        >
          <Stars />
          <ScrollUpdater />
          {children}
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default MainCanvas;
