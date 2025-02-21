import { useState, useEffect } from "react";
import useScreenSize from "./useScreenSize";

export const useDynamicFontSize = () => {
  const { isMobile } = useScreenSize();
  const [fontSize, setFontSize] = useState<number>(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Set initial font size based on screen size
    const initialSize = isMobile ? 3 : 10;
    setFontSize(initialSize);
    setHasInitialized(true);
  }, [isMobile]);

  const updateFontSize = (scrollOffset: number) => {
    if (!hasInitialized) return;

    if (isMobile) {
      setFontSize(Math.max(0.8, 3 - scrollOffset * 10));
    } else {
      setFontSize(Math.max(0.8, 10 - scrollOffset * 55));
    }
  };

  return {
    fontSize,
    hasInitialized,
    updateFontSize,
  };
};
