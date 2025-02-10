//@ts-nocheck
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    // Your nodes...
    asteroid_low_Aster_0: THREE.Mesh;
    Astro_suit_0: THREE.Mesh;
    Astro_suit_accessories_0: THREE.Mesh;
    Astro_suit_visor_0: THREE.Mesh;
    bulb_colYellow_0: THREE.Mesh;
    bulb_Green_0: THREE.Mesh;
    Flower_DAISYNone1_0: THREE.Mesh;
    polySurface150_Skull_0: THREE.Mesh;
    polySurface263_Green_0: THREE.Mesh;
    polySurface264_Green_0: THREE.Mesh;
    polySurface265_Green_0: THREE.Mesh;
    polySurface266_Green_0: THREE.Mesh;
    polySurface267_Green_0: THREE.Mesh;
    polySurface269_Green_0: THREE.Mesh;
    polySurface270_Green_0: THREE.Mesh;
    polySurface273_Green_0: THREE.Mesh;
    polySurface274_Green_0: THREE.Mesh;
    polySurface275_Green_0: THREE.Mesh;
    polySurface276_Green_0: THREE.Mesh;
    polySurface277_Green_0: THREE.Mesh;
    polySurface278_Green_0: THREE.Mesh;
    polySurface279_Green_0: THREE.Mesh;
    polySurface280_Green_0: THREE.Mesh;
    polySurface281_Green_0: THREE.Mesh;
    polySurface282_Green_0: THREE.Mesh;
    polySurface283_Green_0: THREE.Mesh;
    polySurface284_Green_0: THREE.Mesh;
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
    _gltfNode_0002: THREE.Mesh;
    Plane__0: THREE.Mesh;
    Plane001__0: THREE.Mesh;
    Plane002__0: THREE.Mesh;
    Plane003__0: THREE.Mesh;
    Sphere__0: THREE.Mesh;
    Sphere001__0: THREE.Mesh;
    Camera: THREE.PerspectiveCamera;
  };
  materials: {
    ["Material.001"]: THREE.MeshPhysicalMaterial;
    suit: THREE.MeshStandardMaterial;
    suit_accessories: THREE.MeshStandardMaterial;
    suit_visor: THREE.MeshStandardMaterial;
    colYellow: THREE.MeshStandardMaterial;
    Green: THREE.MeshStandardMaterial;
    ["DAISY:None1"]: THREE.MeshStandardMaterial;
    Skull: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
  };
  animations: THREE.AnimationClip[];
};

export function SpaceAnimatedModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials, animations } = useGLTF(
    "/SpaceAnimated/SpaceManAnimated.gltf"
  ) as GLTFResult;
  const { actions, names, mixer } = useAnimations(animations);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  useEffect(() => {
    console.log("Animations:", animations);
    console.log("Actions:", actions);
    console.log("Names:", names);

    if (actions && names && names.length > 0) {
      const action = actions[names[0]];
      console.log("Playing action:", action);
      action.play();

      return () => action.stop();
    }
  }, [actions, names, animations]);

  useEffect(() => {
    if (materials.suit_accessories) {
      materials.suit_accessories.color.set(new THREE.Color(0x000000));
    }
    if (materials.suit) {
      materials.suit.color.set(new THREE.Color(0x00333333));
    }
  }, [materials.suit_accessories, materials.suit]);

  useEffect(() => {
    if (nodes.Camera) {
      cameraRef.current = nodes.Camera;
    }
  }, [nodes]);

  return (
    <group
      ref={cameraRef}
      {...props}
      dispose={null}
      scale={0.17}
      position={[0, 0, 0]}
      rotation={[0, 1, 0]}
    >
      <group position={[0.256, -2.864, -1.332]} scale={0.082}>
        <group
          position={[-0.11, 244.726, 30.459]}
          rotation={[0.262, -Math.PI / 4, 0]}
          scale={24.834}
        >
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault={true}
            far={1000}
            near={0.1}
            fov={22.895}
            position={nodes.Camera.position}
            rotation={nodes.Camera.rotation}
          />
          <mesh
            geometry={nodes.bulb_colYellow_0.geometry}
            material={materials.colYellow}
          />
          <mesh
            geometry={nodes.bulb_Green_0.geometry}
            material={materials.Green}
          />
        </group>
        <group rotation={[-1.431, -0.112, -0.772]} scale={0.057}>
          <mesh
            geometry={nodes.polySurface263_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface264_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface265_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface266_Green_0.geometry}
            material={materials.Green}
            position={[-79.006, 142.82, 0]}
            rotation={[0, 0, -0.262]}
          />
          <mesh
            geometry={nodes.polySurface267_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface269_Green_0.geometry}
            material={materials.Green}
            position={[-121.911, 305.055, 0]}
            rotation={[0, 0, -Math.PI / 6]}
          />
          <mesh
            geometry={nodes.polySurface270_Green_0.geometry}
            material={materials.Green}
            position={[0, 8.945, 0]}
          />
          <mesh
            geometry={nodes.polySurface273_Green_0.geometry}
            material={materials.Green}
            position={[-120.091, 467.716, 0]}
            rotation={[0, 0, -Math.PI / 4]}
          />
          <mesh
            geometry={nodes.polySurface274_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface275_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface276_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface277_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface278_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface279_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface280_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface281_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface282_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface283_Green_0.geometry}
            material={materials.Green}
          />
          <mesh
            geometry={nodes.polySurface284_Green_0.geometry}
            material={materials.Green}
          />
        </group>
        <mesh
          geometry={nodes.asteroid_low_Aster_0.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Astro_suit_0.geometry}
          material={materials.suit}
        />
        <mesh
          geometry={nodes.Astro_suit_accessories_0.geometry}
          material={materials.suit_accessories}
        />
        <mesh
          geometry={nodes.Astro_suit_visor_0.geometry}
          material={materials.suit_visor}
        />
        <mesh
          geometry={nodes.Flower_DAISYNone1_0.geometry}
          material={materials["DAISY:None1"]}
          position={[2.344, -7492.561, -1150.78]}
          rotation={[0.262, -Math.PI / 4, 0]}
          scale={24.834}
        />
        <mesh
          geometry={nodes.polySurface150_Skull_0.geometry}
          material={materials.Skull}
          position={[-0.874, 0, 0]}
        />
      </group>
      <group
        position={[0.22, 29.239, 5.235]}
        rotation={[-1.938, 0, 0]}
        scale={0.178}
      >
        <mesh
          geometry={nodes._gltfNode_0.geometry}
          material={materials["Material.002"]}
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
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes._gltfNode_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes._gltfNode_3.geometry}
          material={materials["Material.004"]}
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
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes._gltfNode_7.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes._gltfNode_8.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes._gltfNode_9.geometry}
          material={materials["Material.012"]}
        />
      </group>
      <group
        position={[-0.345, 313.658, -633.022]}
        rotation={[0, 0.008, -Math.PI]}
        scale={19.27}
      >
        <mesh
          geometry={nodes._gltfNode_0002.geometry}
          material={materials["Material.015"]}
          position={[0.227, 14.838, 32.653]}
          rotation={[0.789, 0.006, 0.002]}
          scale={0.253}
        />
      </group>
      <group
        position={[13.802, -16.114, -23.054]}
        rotation={[1.148, -0.245, -2.643]}
        scale={0.033}
      >
        <mesh
          geometry={nodes.Plane__0.geometry}
          material={materials["Material.013"]}
          rotation={[Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane001__0.geometry}
          material={materials["Material.016"]}
          position={[0, 3.651, -28.164]}
          rotation={[Math.PI, 0, 0]}
          scale={[100, 100, 135.554]}
        />
        <mesh
          geometry={nodes.Plane002__0.geometry}
          material={materials["Material.017"]}
          position={[0, 56.332, 0]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[100, 59.17, 100]}
        />
        <mesh
          geometry={nodes.Plane003__0.geometry}
          material={materials["Material.018"]}
          position={[-2.16, 56.332, -28.164]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
          scale={[100, 59.17, 135.554]}
        />
        <mesh
          geometry={nodes.Sphere__0.geometry}
          material={materials["Material.019"]}
          position={[0.528, 57.758, -25.523]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={38.52}
        />
        <mesh
          geometry={nodes.Sphere001__0.geometry}
          material={materials["Material.020"]}
          position={[0.528, 57.758, -25.523]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={33.997}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/SpaceAnimated/SpaceManAnimated.gltf");
