import { createContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const defaultUserContextValue: UserContextType = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext<UserContextType>(
  defaultUserContextValue
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user: currentUser } = useAuth();

  const value = {
    currentUser,
    setCurrentUser: () => {},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
