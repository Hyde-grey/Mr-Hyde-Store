/// <reference types="@react-three/fiber" />
import { ThreeElements } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    mesh: ThreeElements["mesh"];
    group: ThreeElements["group"];
    primitive: ThreeElements["primitive"];
    ambientLight: ThreeElements["ambientLight"];
    directionalLight: ThreeElements["directionalLight"];
    pointLight: ThreeElements["pointLight"];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
