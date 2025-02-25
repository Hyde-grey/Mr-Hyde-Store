//@ts-nocheck
import * as THREE from "three";
import { useRef, useMemo, useLayoutEffect } from "react";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import BackfaceMaterial from "./BackfaceMaterial";
import RefractionMaterial from "./RefractionMaterial";
import { useScroll } from "@react-three/drei";

export default function Diamond({ position, scale }) {
  const { nodes } = useLoader(GLTFLoader, "/DiamondModel/diamond.glb") as any;

  useLayoutEffect(() => {
    nodes.pCone1_lambert1_0.geometry.center();
  }, [nodes]);

  const { size, gl, scene, camera } = useThree();
  const ref = useRef<THREE.Mesh>(null!);
  const ratio = gl.getPixelRatio();
  const scroll = useScroll();

  const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] =
    useMemo(() => {
      const envFbo = new THREE.WebGLRenderTarget(
        size.width * ratio,
        size.height * ratio
      );
      const backfaceFbo = new THREE.WebGLRenderTarget(
        size.width * ratio,
        size.height * ratio
      );
      const backfaceMaterial = new BackfaceMaterial();
      const refractionMaterial = new RefractionMaterial({
        envMap: envFbo.texture,
        backfaceMap: backfaceFbo.texture,
        resolution: [size.width * ratio, size.height * ratio],
      });
      return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial];
    }, [size, ratio]);

  // Adjust the camera position and look-at direction
  useLayoutEffect(() => {
    camera.position.set(50, 15, 105);
    camera.lookAt(0, 0, 0);

    gl.autoClear = false;

    // Render environment to envFbo
    camera.layers.set(0);
    gl.setRenderTarget(envFbo);
    gl.clearColor();
    gl.render(scene, camera);

    // Render backface to backfaceFbo
    gl.clearDepth();
    camera.layers.set(1);
    if (ref.current) {
      ref.current.material = backfaceMaterial;
    }
    gl.setRenderTarget(backfaceFbo);
    gl.clearDepth();
    gl.render(scene, camera);

    // Render the diamond with refraction material
    camera.layers.set(0);
    gl.setRenderTarget(null);
    if (ref.current) {
      ref.current.material = refractionMaterial;
    }
    gl.render(scene, camera);
  }, [
    camera,
    gl,
    scene,
    envFbo,
    backfaceFbo,
    backfaceMaterial,
    refractionMaterial,
  ]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // Slow spin
      // ref.current.rotation.x = scroll.offset * Math.PI * 3;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.pCone1_lambert1_0.geometry}
      position={position} // Use the position prop
      scale={scale}
    />
  );
}
