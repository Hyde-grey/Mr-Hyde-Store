//@ts-nocheck
import * as THREE from "three";

export const RefractionMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,
  roughness: 0,
  metalness: 0,
  transmission: 1,
  refractionRatio: 0.98,
});
