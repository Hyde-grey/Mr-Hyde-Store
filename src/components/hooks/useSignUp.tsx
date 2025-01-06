import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

type UseSignUpResult = {
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  error: string | null;
  loading: boolean;
};

export const useSignUp = (): UseSignUpResult => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, error, loading };
};
