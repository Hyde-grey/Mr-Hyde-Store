/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/CarbonHeart/Heart.gltf --types 
*/
//@ts-nocheck
import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_0_1: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_1_1: THREE.Mesh;
  };
  materials: {};
  animations: GLTFAction[];
};

export function HeartModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/CarbonHeart/Heart.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={500}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
        />
        <mesh
          geometry={nodes.mesh_0_1.geometry}
          material={nodes.mesh_0_1.material}
        />
        <mesh
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
        />
        <mesh
          geometry={nodes.mesh_1_1.geometry}
          material={nodes.mesh_1_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/CarbonHeart/Heart.gltf");
