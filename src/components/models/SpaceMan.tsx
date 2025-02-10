/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/SpaceManModel/spaceMan.gltf --types 
*/
//@ts-nocheck
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
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
  };
  materials: {
    colYellow: THREE.MeshStandardMaterial;
    suit: THREE.MeshStandardMaterial;
    suit_accessories: THREE.MeshStandardMaterial;
    suit_visor: THREE.MeshStandardMaterial;
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
  };
  // @ts-expect-error mismatch between types
  animations: GLTFAction[];
};

export function SpaceManModel(props: JSX.IntrinsicElements["group"]) {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const radius = 50; // Radius of the circular path
  const { nodes, materials } = useGLTF(
    "/SpaceManModel/SpaceMan.gltf"
  ) as GLTFResult;

  useEffect(() => {
    // Set the material color to black
    if (materials.suit_accessories) {
      materials.suit_accessories.color.set(new THREE.Color(0x000000));
    }
    if (materials.suit) {
      materials.suit.color.set(new THREE.Color(0x00333333));
    }
  }, [materials.suit_accessories, materials.suit]);

  useFrame(({ camera }) => {
    if (groupRef.current) {
      const angle = scroll.offset * Math.PI * 4; // Calculate angle based on scroll offset
      const x = groupRef.current.position.x + radius * Math.cos(angle);
      const z = groupRef.current.position.z + radius * Math.sin(angle);

      camera.position.set(x, groupRef.current.position.y, z); // Set camera position in a circular path relative to the group
      camera.lookAt(groupRef.current.position); // Make the camera look at the group's position
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={0.17}
      position={[0, 0, 0]}
      rotation={[0, 1, 0]}
      ref={groupRef}
    >
      <group position={[0.256, -2.864, -1.332]} scale={0.082}>
        <group
          position={[-0.11, 244.726, 30.459]}
          rotation={[0.262, -Math.PI / 4, 0]}
          scale={24.834}
        >
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
          material={materials.colYellow}
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
    </group>
  );
}

useGLTF.preload("/SpaceManModel/SpaceMan.gltf");
