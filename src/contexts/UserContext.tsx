import { createContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    setCurrentUser: (user: User | null) => {
      setCurrentUser(user);
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
