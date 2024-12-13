import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useScrollContext } from "../contexts/ScrollContext";

export const ScrollUpdater = () => {
  const { setIsPassedThreshold } = useScrollContext();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset;
    setIsPassedThreshold(scrollY > 0.16);
  });

  return null;
};
