import { createContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  loading: boolean;
  userID: string | null;
};

const defaultUserContextValue: UserContextType = {
  currentUser: null,
  setCurrentUser: () => null,
  loading: true,
  userID: null,
};

export const UserContext = createContext<UserContextType>(
  defaultUserContextValue
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    setCurrentUser: (user: User | null) => {
      setCurrentUser(user);
    },
    loading,
    userID: currentUser?.uid || null,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
