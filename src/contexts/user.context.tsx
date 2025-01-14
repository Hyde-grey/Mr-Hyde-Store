import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
