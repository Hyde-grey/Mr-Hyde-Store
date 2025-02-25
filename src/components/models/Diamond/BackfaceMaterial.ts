//@ts-nocheck
import * as THREE from "three";

class BackfaceMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
        varying vec3 worldNormal;
        void main() {
          worldNormal = normalize(modelViewMatrix * vec4(normal, 0.)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 worldNormal;
        void main() {
          gl_FragColor = vec4(worldNormal, 1.0);
        }`,
      side: THREE.BackSide,
    });
  }
}

export default BackfaceMaterial;
