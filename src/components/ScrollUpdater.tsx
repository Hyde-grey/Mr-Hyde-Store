import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useScrollContext } from "../contexts/ScrollContext";
import { useEffect, useRef } from "react";

export const ScrollUpdater = () => {
  const { setIsPassedThreshold, setScrollOffset } = useScrollContext();
  const scroll = useScroll();
  const isInitialized = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isInitialized.current) {
      setScrollOffset(0);
      setIsPassedThreshold(false);
      isInitialized.current = true;
    }
  }, [setScrollOffset, setIsPassedThreshold]);

  useFrame(() => {
    const scrollY = scroll.offset;

    if (
      !isInitialized.current ||
      Math.abs(scrollY - lastScrollY.current) > 0.01
    ) {
      setScrollOffset(scrollY);
      setIsPassedThreshold(scrollY > 0.16);
      lastScrollY.current = scrollY;
    }
  });

  return null;
};
