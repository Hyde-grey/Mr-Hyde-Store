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
      ref.current.rotation.y += 0.003;
      ref.current.rotation.x = scroll.offset * Math.PI * 3;
    }
  });

  return (
    // @ts-expect-error mismatch between types
    <mesh
      ref={ref}
      geometry={geometryNode.geometry}
      material={
        new THREE.MeshPhysicalMaterial({
          color: 0x333332,
          metalness: 0.9,
          roughness: 0.1,
          transmission: 9,
          thickness: 99,
          clearcoat: 5,
          clearcoatRoughness: 1,
        })
      }
      {...props}
      scale={0.5}
    />
  );
};

useGLTF.preload("/DiamondModel/diamond.glb");
