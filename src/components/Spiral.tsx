import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export type GltfNode = THREE.Object3D<THREE.Object3DEventMap> & {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
};

type SpiralProps = {
  models: React.FC<{ position: THREE.Vector3 }>[];
  initialPosition?: THREE.Vector3;
  rotationDirection?: "clockwise" | "counterclockwise";
  initialRotation?: number;
  height?: number;
  scrollSpeed?: number;
  radius?: number;
};

const Spiral: React.FC<SpiralProps> = ({
  models,
  initialPosition = new THREE.Vector3(0, 0, 0),
  rotationDirection = "clockwise",
  initialRotation = 0,
  height = 8,
  scrollSpeed = 15,
  radius = 7,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const initialYOffset = initialPosition.y; // Initial vertical offset
  const directionMultiplier = rotationDirection === "clockwise" ? 1 : -1;

  useFrame(() => {
    if (groupRef.current) {
      const scrollOffset = scroll.offset;
      // Set the initial rotation and add the scroll-based rotation
      groupRef.current.rotation.y =
        initialRotation + directionMultiplier * scrollOffset * Math.PI * 2;
      groupRef.current.position.set(
        initialPosition.x,
        initialYOffset - scrollOffset * scrollSpeed,
        initialPosition.z
      ); // Move the group down based on scroll
    }
  });

  return (
    // @ts-expect-error mismatch between types
    <group ref={groupRef}>
      {models.map((Model, index) => {
        const xOffset = index === 0 ? -10 : 0; // 20 units to the right for first model
        const yOffset = index === 0 ? 0 : 0; // 20 units to the right for first model
        const zOffset = index === 0 ? -7 : 0; // 20 units to the right for first model

        const angle = index * (Math.PI / 2); // Adjust this for spiral tightness
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = index * height;
        const position = new THREE.Vector3(
          x + xOffset,
          y + yOffset,
          z + zOffset
        ); // Convert to Vector3
        return <Model key={index} position={position} />;
      })}
      {/* @ts-expect-error mismatch between types */}
    </group>
  );
};

export default Spiral;
