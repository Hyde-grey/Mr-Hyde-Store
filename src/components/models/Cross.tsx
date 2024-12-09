import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";

const CrossModel = (props: THREE.Mesh) => {
  const cross = useGLTF("./CrossModel/scene.gltf");

  const ref = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
      ref.current.rotation.x = scroll.offset * Math.PI * 4; // Rotate the model based on scroll
    }
  });

  return (
    <mesh {...props} ref={ref} scale={2}>
      <primitive object={cross.scene} />
    </mesh>
  );
};

export default CrossModel;
