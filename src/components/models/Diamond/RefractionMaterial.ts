//@ts-nocheck
import * as THREE from "three";

class RefractionMaterial extends THREE.ShaderMaterial {
  constructor(options: {
    envMap: THREE.Texture;
    backfaceMap: THREE.Texture;
    resolution: [number, number];
  }) {
    super({
      uniforms: {
        envMap: { value: options.envMap },
        backfaceMap: { value: options.backfaceMap },
        resolution: { value: new THREE.Vector2(...options.resolution) },
      },
      vertexShader: `
        varying vec3 worldNormal;
        varying vec3 viewDirection;
        void main() {
          vec4 transformedNormal = vec4(normal, 0.);
          vec4 transformedPosition = vec4(position, 1.0);
          worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;
          viewDirection = normalize(modelViewMatrix * transformedPosition).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
        }`,
      fragmentShader: `
        uniform sampler2D envMap;
        uniform sampler2D backfaceMap;
        uniform vec2 resolution;
        varying vec3 worldNormal;
        varying vec3 viewDirection;
        void main() {
          vec2 uv = gl_FragCoord.xy / resolution;
          vec3 normal = worldNormal;
          vec3 reflected = reflect(viewDirection, normal);
          vec4 envColor = texture2D(envMap, uv);
          vec4 backfaceColor = texture2D(backfaceMap, uv);
          gl_FragColor = mix(envColor, backfaceColor, 0.9);
        }`,
      transparent: true,
    });
  }
}

export default RefractionMaterial;
