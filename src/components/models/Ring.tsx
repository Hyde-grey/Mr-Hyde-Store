import { useGLTF, useScroll } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GltfNode } from "../../components/Spiral";

export const RingModel = (props: MeshProps) => {
  const { nodes, materials } = useGLTF("/RingModel/scene.gltf");
  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  const geometryNode = nodes.bague_bague_0 as GltfNode;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x = initialRotation.x + scroll.offset * Math.PI * 4;
    }
  });

  const initialRotation = { x: 0, y: Math.PI / 3.5, z: 0 };

  return (
    // @ts-expect-error @react-three/fiber types mismatch
    <mesh
      ref={ref}
      {...props}
      dispose={null}
      scale={0.5}
      geometry={geometryNode.geometry}
      material={materials.bague}
      position={[4, 0.1, 0]}
      rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
    />
  );
};

useGLTF.preload("/RingModel/scene.gltf");
