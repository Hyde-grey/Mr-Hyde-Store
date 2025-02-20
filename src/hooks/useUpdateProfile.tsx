import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";
import { useState, useContext } from "react";
import { getUserId } from "./useAuth";
import { updateProfile } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";

export const useUpdateProfile = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  const postUserData = async (userData: any) => {
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
        setTimeout(() => setIsMessageVisible(false), 5000); // Show message for 5 seconds

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
