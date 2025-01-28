import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type ActionName = "Animation";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function GearAnimatedModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, animations } = useGLTF(
    "/GearAnimated/scene.gltf"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions.Animation) {
      actions.Animation.play();
    }
  }, [actions]);

  const silverMaterial = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.2,
  });

  return (
    // @ts-expect-error mismatch library types
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.2}
      position={[1, -0.5, 1]}
    >
      {/* @ts-expect-error mismatch library types */}
      <group name="Sketchfab_Scene">
        {/* @ts-expect-error mismatch library types */}
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          {/* @ts-expect-error mismatch library types */}
          <group name="root">
            {/* @ts-expect-error mismatch library types */}
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              {/* @ts-expect-error mismatch library types */}
              <group name="Gear_2">
                {/* @ts-expect-error mismatch library types */}
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={silverMaterial}
                />
                {/* @ts-expect-error mismatch library types */}
              </group>
              {/* @ts-expect-error mismatch library types */}
              <group name="Gear001_3" position={[-1.01, 0, -1.724]}>
                {/* @ts-expect-error mismatch library types */}
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={silverMaterial}
                />
                {/* @ts-expect-error mismatch library types */}
              </group>
              {/* @ts-expect-error mismatch library types */}
            </group>
            {/* @ts-expect-error mismatch library types */}
          </group>
          {/* @ts-expect-error mismatch library types */}
        </group>
        {/* @ts-expect-error mismatch library types */}
      </group>
      {/* @ts-expect-error mismatch library types */}
    </group>
  );
}

useGLTF.preload("/GearAnimated/scene.gltf");
