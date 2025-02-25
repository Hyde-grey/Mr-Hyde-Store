/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 --types ./public/ChromeCrossModel/chromeCross.gltf 
*/
// @ts-nocheck
import * as THREE from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type ChromeCrossProps = {
  position?: THREE.Vector3 | [number, number, number];
  scale?: number;
};

type GLTFResult = GLTF & {
  nodes: {
    Plane__0: THREE.Mesh;
    Plane001__0: THREE.Mesh;
    Plane002__0: THREE.Mesh;
    Plane003__0: THREE.Mesh;
    Sphere__0: THREE.Mesh;
    Sphere001__0: THREE.Mesh;
  };
  materials: {
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function ChromeCrossModel({
  position,
  scale,
  ...props
}: ChromeCrossProps & JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/ChromeCrossModel/chromeCross.gltf"
  ) as GLTFResult;

  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      scale={scale}
      position={position}
    >
      <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Plane__0.geometry}
          material={materials["Material.006"]}
          rotation={[Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane001__0.geometry}
          material={materials["Material.005"]}
          position={[0, 3.651, -28.164]}
          rotation={[Math.PI, 0, 0]}
          scale={[100, 100, 135.554]}
        />
        <mesh
          geometry={nodes.Plane002__0.geometry}
          material={materials["Material.001"]}
          position={[0, 56.332, 0]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[100, 59.17, 100]}
        />
        <mesh
          geometry={nodes.Plane003__0.geometry}
          material={materials["Material.003"]}
          position={[-2.16, 56.332, -28.164]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[100, 59.17, 135.554]}
        />
        <mesh
          geometry={nodes.Sphere__0.geometry}
          material={materials["Material.002"]}
          position={[0.528, 57.758, -25.523]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={38.52}
        />
        <mesh
          geometry={nodes.Sphere001__0.geometry}
          material={materials["Material.004"]}
          position={[0.528, 57.758, -25.523]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={33.997}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ChromeCrossModel/chromeCross.gltf");
