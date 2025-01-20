import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";
import { useEffect, useState, useContext } from "react";
import { getUserId } from "./useAuth";
import { updateProfile } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";

export const useUpdateProfile = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setIsMessageVisible(false);
    }, 3000);
  }, [isMessageVisible]);

  const postUserData = async (userData: any) => {
    setIsMessageVisible(false);
    setLoading(true);
    setError(null);
    try {
      const userID = await getUserId();
      if (userID) {
        const docRef = doc(db, "users", userID);
        await updateProfile(auth.currentUser!, {
          displayName: userData.displayName,
        });
        await setDoc(docRef, userData, { merge: true });
        console.log("User data updated successfully");
        setIsMessageVisible(true);

        if (auth.currentUser) {
          setCurrentUser({ ...auth.currentUser, ...userData });
        }
      } else {
        console.log("No user is signed in.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      setError("Failed to update user data");
    } finally {
      setLoading(false);
    }
  };

  return {
    postUserData,
    error,
    loading,
    isMessageVisible,
  };
};
