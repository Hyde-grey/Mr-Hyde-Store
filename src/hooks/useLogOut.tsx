import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    setError(null);
    const auth = getAuth();

    try {
      await signOut(auth);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, error, loading };
};
