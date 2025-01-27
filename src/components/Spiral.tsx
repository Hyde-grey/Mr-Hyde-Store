import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import { ChromeHeartRingModel } from "./models/ChromeHeartRing";
import { useFrame } from "@react-three/fiber";
import { ChromeCrossModel } from "./models/ChromeCross";
import Diamond from "./models/Diamond/BlackDiamond"; // Ensure correct import path

export type GltfNode = THREE.Object3D<THREE.Object3DEventMap> & {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
};

type SpiralProps = {
  initialPosition?: THREE.Vector3;
};

const Spiral: React.FC<SpiralProps> = ({
  initialPosition = new THREE.Vector3(0, 0, 0),
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const models = [ChromeHeartRingModel, Diamond, ChromeCrossModel]; // List of models to place
  const radius = 7; // Radius of the spiral
  const height = 7; // Height increment per model
  const initialYOffset = initialPosition.y; // Initial vertical offset

  useFrame(() => {
    if (groupRef.current) {
      const scrollOffset = scroll.offset;
      groupRef.current.rotation.y = scrollOffset * Math.PI * 2; // Rotate the group based on scroll
      groupRef.current.position.set(
        initialPosition.x,
        initialYOffset - scrollOffset * 15,
        initialPosition.z
      ); // Move the group down based on scroll
    }
  });

  return (
    // @ts-expect-error mismatch between types
    <group ref={groupRef}>
      {models.map((Model, index) => {
        const angle = index * (Math.PI / 2); // Adjust this for spiral tightness
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = index * height;
        const position = new THREE.Vector3(x, y, z); // Convert to Vector3
        return <Model key={index} position={position} />;
      })}
      {/* @ts-expect-error mismatch between types */}
    </group>
  );
};

export default Spiral;
