// @ts-nocheck
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _gltfNode_0: THREE.Mesh;
  };
  materials: {};
  animations: GLTFAction[];
};

export function ChromeGrillModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/ChromeGrill/ChromeGrill.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, 1, -0.1]}>
      <mesh
        geometry={nodes._gltfNode_0.geometry}
        material={nodes._gltfNode_0.material}
        rotation={[4.7, 0, 0]}
        scale={5}
      />
    </group>
  );
}

useGLTF.preload("/ChromeGrill/ChromeGrill.gltf");
