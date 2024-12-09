import { useGLTF, useScroll } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { GltfNode } from "components/Spiral";
import { useRef } from "react";
import * as THREE from "three";

export const DiamondModel = (props: MeshProps) => {
  const { nodes } = useGLTF("/DiamondModel/diamond.glb");
  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  const geometryNode = nodes.pCone1_lambert1_0 as GltfNode;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
      ref.current.rotation.x = scroll.offset * Math.PI * 3; // Rotate the model based on scroll
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={geometryNode.geometry}
      material={
        new THREE.MeshPhysicalMaterial({
          color: 0x333333,
          metalness: 0.9,
          roughness: 0.1,
          transmission: 1, // make the material transparent
          thickness: 3, // how thick the glass is, to adjust refraction
          clearcoat: 50,
          clearcoatRoughness: 1,
        })
      }
      {...props}
      scale={0.5}
    />
  );
};

useGLTF.preload("./public/DiamondModel/diamond.glb");
