/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 --types ./public/ChromeHeartRingModel/chrome_heart_ring_Textured.gltf 
*/
//@ts-nocheck
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    _gltfNode_0: THREE.Mesh;
    _gltfNode_1: THREE.Mesh;
    _gltfNode_10: THREE.Mesh;
    _gltfNode_11: THREE.Mesh;
    _gltfNode_2: THREE.Mesh;
    _gltfNode_3: THREE.Mesh;
    _gltfNode_4: THREE.Mesh;
    _gltfNode_5: THREE.Mesh;
    _gltfNode_6: THREE.Mesh;
    _gltfNode_7: THREE.Mesh;
    _gltfNode_8: THREE.Mesh;
    _gltfNode_9: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function ChromeHeartRingModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/ChromeHeartRingModel/chrome_heart_ring_Textured.gltf"
  ) as GLTFResult;

  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x = initialRotation.x + scroll.offset * Math.PI * 4;
    }
  });

  const initialRotation = { x: 0, y: Math.PI / 3.5, z: 0 };

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      scale={0.18}
      position={[0, 0, -7]}
    >
      <group
        rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
      >
        <mesh
          geometry={nodes._gltfNode_0.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes._gltfNode_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes._gltfNode_10.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes._gltfNode_11.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes._gltfNode_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes._gltfNode_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes._gltfNode_4.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes._gltfNode_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes._gltfNode_6.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes._gltfNode_7.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes._gltfNode_8.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes._gltfNode_9.geometry}
          material={materials["Material.008"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ChromeHeartRingModel/chrome_heart_ring_Textured.gltf");
