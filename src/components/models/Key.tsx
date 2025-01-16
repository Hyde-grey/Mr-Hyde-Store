import * as THREE from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Key_2: THREE.Mesh;
  };
  materials: {
    ["silver mat"]: THREE.MeshStandardMaterial;
  };
};

export const KeyModel = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/KeyModel/KeyAsset.gltf") as GLTFResult;

  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z = initialRotation.z + scroll.offset * Math.PI * 4;
    }
  });

  const initialRotation = { x: 0.5, y: 0, z: 2 };

  return (
    // @ts-expect-error mismatch library types
    <group {...props} dispose={null}>
      {/* @ts-expect-error mismatch library types */}
      <mesh
        ref={ref}
        scale={2.5}
        geometry={nodes.Key_2.geometry}
        material={materials["silver mat"]}
        position={[-0.016, 0, -0.238]}
        rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
      />
      {/* @ts-expect-error mismatch library types */}
    </group>
  );
};

useGLTF.preload("/KeyAsset.gltf");
