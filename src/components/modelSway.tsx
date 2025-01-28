import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const ModelSway = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [direction, setDirection] = useState(1);
  const maxRotation = Math.PI / 4; // 45 degrees

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += direction * 0.002;

      if (groupRef.current.rotation.y >= maxRotation) {
        setDirection(-1);
      } else if (groupRef.current.rotation.y <= -maxRotation) {
        setDirection(1);
      }
    }
  });

  return (
    // @ts-expect-error mismatch between types
    <group ref={groupRef} position={[0, 0, 0]}>
      {children}
      {/* @ts-expect-error mismatch between types */}
    </group>
  );
};

export default ModelSway;
