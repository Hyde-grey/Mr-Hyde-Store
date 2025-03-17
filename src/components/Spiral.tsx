//@ts-nocheck
import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export type GltfNode = THREE.Object3D<THREE.Object3DEventMap> & {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
};

type SpiralProps = {
  models: Array<
    React.ComponentType<{
      position: [number, number, number];
      scale: [number, number, number] | number;
    }>
  >;
  initialPosition?: THREE.Vector3;
  rotationDirection?: "clockwise" | "counterclockwise";
  initialRotation?: number;
  height?: number;
  scrollSpeed?: number;
  radius: number;
};

const Spiral: React.FC<SpiralProps> = ({
  models,
  initialPosition = new THREE.Vector3(0, 0, 0),
  rotationDirection = "clockwise",
  initialRotation = 0,
  height = 8,
  scrollSpeed = 15,
  radius,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const initialYOffset = initialPosition.y;
  const directionMultiplier = rotationDirection === "clockwise" ? 1 : -1;

  useFrame(() => {
    if (groupRef.current) {
      const scrollOffset = scroll.offset;
      const targetRotation =
        initialRotation + directionMultiplier * scrollOffset * Math.PI * 2;
      const targetY = initialYOffset - scrollOffset * scrollSpeed;

      // Smoothly interpolate rotation and position
      groupRef.current.rotation.y +=
        (targetRotation - groupRef.current.rotation.y) * 0.05;
      groupRef.current.position.y +=
        (targetY - groupRef.current.position.y) * 0.05;

      // Keep x and z positions stable
      groupRef.current.position.x = initialPosition.x;
      groupRef.current.position.z = initialPosition.z;
    }
  });

  return (
    // @ts-expect-error mismatch between types
    <group ref={groupRef}>
      {models.map((Model, index) => {
        const xOffset = index === 0 ? -10 : 0;
        const yOffset = index === 0 ? 0 : 0;
        const zOffset = index === 0 ? -7 : 0;

        const angle = index * (Math.PI / 2);
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = index * height;
        const position: [number, number, number] = [
          x + xOffset,
          y + yOffset,
          z + zOffset,
        ];
        return <Model key={index} position={position} scale={[1, 1, 1]} />;
      })}
    </group>
  );
};

export default Spiral;
