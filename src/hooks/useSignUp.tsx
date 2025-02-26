import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { translateAuthError } from "../utils/errorTranslations";

type UseSignUpResult = {
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<boolean>;
  error: string | null;
  loading: boolean;
};

type UserDocument = {
  displayName: string | null;
  email: string | null;
  createdAt: Date;
  favorites: number[];
  [key: string]: any;
};

const createUserDocumentFromAuth = async (
  userAuth: User | null,
  additionalInformation: { [key: string]: any } = {}
): Promise<void> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    const userDoc: UserDocument = {
      displayName,
      email,
      createdAt,
      favorites: [],
      ...additionalInformation,
    };

    try {
      await setDoc(userDocRef, userDoc);
      console.log("User document created successfully");
    } catch (error: any) {
      console.log("Error creating the user document", error.message);
    }
  } else {
    console.log("User document already exists");
  }
};

export const useSignUp = (): UseSignUpResult => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
      await createUserDocumentFromAuth(userCredential.user);
      setError(null);
      return true;
    } catch (err: any) {
      const errorMessage = translateAuthError(err.code);
      setError(errorMessage);
      setTimeout(() => setError(null), 10000);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, error, loading };
};
