import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
};

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const updateScreenSize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= breakpoints.mobile);
    setIsTablet(width > breakpoints.mobile && width <= breakpoints.tablet);
    setIsDesktop(width > breakpoints.tablet && width <= breakpoints.desktop);
    setIsFullScreen(width > breakpoints.desktop);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return { isMobile, isTablet, isDesktop, isFullScreen };
};

export default useScreenSize;
