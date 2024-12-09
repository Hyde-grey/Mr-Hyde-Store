import { useGLTF, useScroll } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const RingModel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF("RingModel/scene.gltf");
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
      ref.current.rotation.x = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
    }
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.5}>
        <mesh
          // @ts-ignore
          geometry={nodes.bague_bague_0.geometry}
          material={materials.bague}
          position={[-0.002, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/scene.gltf");
