import { createContext, useContext, useState } from "react";

type ScrollProviderProps = {
  children: React.ReactNode;
};

type ScrollContextType = {
  scrollOffset: number;
  setScrollOffset: (value: number) => void;
  isPassedThreshold: boolean;
  setIsPassedThreshold: (value: boolean) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollOffset: 0,
  setScrollOffset: () => {},
  isPassedThreshold: false,
  setIsPassedThreshold: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [isPassedThreshold, setIsPassedThreshold] = useState(false);
  //TODO: Seperate isPassedThreshold into a new context to reduce unecessary renders
  const [scrollOffset, setScrollOffset] = useState(0);

  return (
    <ScrollContext.Provider
      value={{
        isPassedThreshold,
        setIsPassedThreshold,
        scrollOffset,
        setScrollOffset,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
