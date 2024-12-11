import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import { RingModel } from "./models/Ring";
import { DiamondModel } from "./models/Diamond";
import CrossModel from "./models/Cross";
import { useFrame } from "@react-three/fiber";

export type GltfNode = THREE.Object3D<THREE.Object3DEventMap> & {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>;
};

const Spiral = () => {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const models = [RingModel, DiamondModel, CrossModel, RingModel]; // List of models to place
  const radius = 6.5; // Radius of the spiral
  const height = 6.5; // Height increment per model
  const initialYOffset = 0.9; // Initial vertical offset

  useFrame(() => {
    if (groupRef.current) {
      const scrollOffset = scroll.offset;
      groupRef.current.rotation.y = -scrollOffset * Math.PI * 2; // Rotate the group based on scroll, in the opposite direction
      groupRef.current.position.y = initialYOffset - scrollOffset * 13; // Move the group down based on scroll
    }
  });

  return (
    <group ref={groupRef}>
      {models.map((Model, index) => {
        const angle = index * (Math.PI / 2); // Adjust this for spiral tightness
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = index * height;
        return <Model key={index} position={[x, y, z]} />;
      })}
    </group>
  );
};

export default Spiral;
