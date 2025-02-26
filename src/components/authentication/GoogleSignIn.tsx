import { FcGoogle } from "react-icons/fc";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";
import styles from "./GoogleSignIn.module.css";

type GoogleSignInProps = {
  onSuccess: () => void;
  onError: () => void;
};

const GoogleSignIn = ({ onSuccess, onError }: GoogleSignInProps) => {
  const { signInWithGoogle, loading } = useGoogleSignIn();

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result) {
      onSuccess();
    } else {
      onError();
    }
  };

  return (
    <button
      className={styles.googleButton}
      onClick={handleGoogleSignIn}
      disabled={loading}
    >
      <FcGoogle className={styles.googleIcon} />
      <span>{loading ? "Signing in..." : "Continue with Google"}</span>
    </button>
  );
};

export default GoogleSignIn;
