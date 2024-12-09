import { useGLTF, useScroll } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const DiamondModel = (props: GroupProps) => {
  const { nodes } = useGLTF("./public/DiamondModel/diamond.glb");
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
      ref.current.rotation.x = scroll.offset * Math.PI * 3; // Rotate the model based on scroll
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.3}>
        <mesh
          //@ts-ignore
          geometry={nodes.pCone1_lambert1_0.geometry}
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
        />
      </group>
    </group>
  );
};

useGLTF.preload("./public/DiamondModel/diamond.glb");
