import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { translateAuthError } from "../utils/errorTranslations";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential | null> => {
    setLoading(true);
    setError(null);
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setError(null);
      return userCredential;
    } catch (err: any) {
      const errorMessage = translateAuthError(err.code);
      setError(errorMessage);
      setTimeout(() => setError(null), 10000);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
