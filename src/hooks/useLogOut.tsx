import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      navigate("/");
    }
  };

  return { logout, error, loading };
};
