import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const useSaveFavoritesToFirestore = (
  favorites: number[],
  userID: string | null
): void => {
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        if (!userID) return;
        const userDocRef = doc(db, "users", userID);
        if (!favorites.length) {
          await updateDoc(userDocRef, { favorites: [] });
        } else {
          console.log("Saving favorites to Firestore:", favorites);
          await setDoc(userDocRef, { favorites }, { merge: true });
        }
      } catch (error) {
        console.error("Failed to save favorites to Firestore:", error);
      }
    };

    saveFavorites();
  }, [userID, favorites]);
};

export const useFavoritesFromFirestore = (
  userID: string | null
): {
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
} => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    if (!userID) return;

    const fetchFavorites = async () => {
      try {
        const userDocRef = doc(db, "users", userID);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFavorites(userData?.favorites || []);
        }
      } catch (error) {
        console.error("Failed to retrieve favorites from Firestore:", error);
      }
    };

    fetchFavorites();
  }, [userID]);

  return { favorites, setFavorites };
};
