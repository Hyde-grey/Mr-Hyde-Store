import React, { createContext, useContext, useState } from "react";

type ScrollProviderProps = {
  children: React.ReactNode;
};

type ScrollContextType = {
  isPassedThreshold: boolean;
  setIsPassedThreshold: (value: boolean) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  isPassedThreshold: false,
  setIsPassedThreshold: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [isPassedThreshold, setIsPassedThreshold] = useState(false);

  return (
    <ScrollContext.Provider value={{ isPassedThreshold, setIsPassedThreshold }}>
      {children}
    </ScrollContext.Provider>
  );
};
