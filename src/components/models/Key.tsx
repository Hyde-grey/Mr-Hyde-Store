import * as THREE from "three";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { KeyRotationContext } from "../../contexts/KeyRotationContext";

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
  const context = useContext(KeyRotationContext)!;
  const { rotationZ, positionX, positionY } = context;
  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      const newRotation =
        initialRotation.z + scroll.offset * Math.PI * 4 + rotationZ;

      ref.current.rotation.z = newRotation;
      ref.current.position.x = positionX;
      ref.current.position.y = positionY;
    }
  });

  const initialRotation = { x: 1, y: 3.1, z: rotationZ };
  const initialPosition = { x: positionX, y: positionY, z: 0 };

  return (
    // @ts-expect-error mismatch library types
    <group {...props} dispose={null}>
      {/* @ts-expect-error mismatch library types */}
      <mesh
        ref={ref}
        scale={0.7}
        geometry={nodes.Key_2.geometry}
        material={materials["silver mat"]}
        position={[initialPosition.x, initialPosition.y, initialPosition.z]}
        rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
      />
      {/* @ts-expect-error mismatch library types */}
    </group>
  );
};

useGLTF.preload("/KeyAsset.gltf");
