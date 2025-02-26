import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { translateAuthError } from "../utils/errorTranslations";

export const useGoogleSignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (err: any) {
      const errorMessage = translateAuthError(err.code);
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signInWithGoogle, error, loading };
};
