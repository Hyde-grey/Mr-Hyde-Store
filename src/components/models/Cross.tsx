import * as THREE from "three";
import { useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";

const CrossModel = (props: MeshProps) => {
  const cross = useGLTF("/CrossModel/scene.gltf");

  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 4;
      ref.current.rotation.x = scroll.offset * Math.PI * 4;
    }
  });

  return (
    // @ts-expect-error mismatch between types
    <mesh {...props} ref={ref} scale={2}>
      {/* @ts-expect-error mismatch between types */}
      <primitive object={cross.scene} />
      {/* @ts-expect-error mismatch between types */}
    </mesh>
  );
};

export default CrossModel;
