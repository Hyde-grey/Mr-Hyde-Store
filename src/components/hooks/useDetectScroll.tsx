import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export const useDetectScroll = (threshold: number) => {
  const [scrolledPast, setScrolledPast] = useState(false);
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;
    setScrolledPast(scrollY > threshold);
  });

  return {
    scrolledPast,
    scrollOffset: scroll.offset,
  };
};
