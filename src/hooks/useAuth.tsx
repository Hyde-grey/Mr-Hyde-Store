import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";

export const getUserId = async () => {
  const user = auth.currentUser;
  if (user) {
    return user.uid;
  } else {
    console.log("No user is signed in.");
    return null;
  }
};

export const getUserData = async () => {
  const userID = await getUserId();
  if (userID) {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } else {
    console.log("No user is signed in.");
  }
};

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
