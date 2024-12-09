import { useGLTF, useScroll } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { GltfNode } from "components/Spiral";
import { useRef } from "react";
import * as THREE from "three";

export const RingModel = (props: MeshProps) => {
  const { nodes, materials } = useGLTF("/RingModel/scene.gltf");
  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  const geometryNode = nodes.bague_bague_0 as GltfNode;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
      ref.current.rotation.x = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
    }
  });
  return (
    <mesh
      ref={ref}
      {...props}
      dispose={null}
      scale={0.5}
      geometry={geometryNode.geometry}
      material={materials.bague}
    />
  );
};

useGLTF.preload("/scene.gltf");
