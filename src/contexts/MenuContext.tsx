import { createContext, useContext, useState } from "react";

type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isBottomMenuOpen: boolean;
  setIsBottomMenuOpen: (value: boolean) => void;
};

type MenuProviderProps = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isBottomMenuOpen: false,
  setIsBottomMenuOpen: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBottomMenuOpen, setIsBottomMenuOpen] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isBottomMenuOpen,
        setIsBottomMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
