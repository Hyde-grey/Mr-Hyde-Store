//@ts-nocheck

import { collection, doc, writeBatch, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const addCollectionsAndDocuments = async (collectionKey, data) => {
  console.log("Data received:", data);

  if (!data || !data.collections) {
    console.error("Data or collections are missing", data);
    return;
  }

  const batch = writeBatch(db);

  Object.entries(data.collections).forEach(([key, value]) => {
    const collectionRef = collection(db, collectionKey);
    const docRef = doc(collectionRef, key);

    batch.set(docRef, {
      id: value.id,
      name: value.name,
      description: value.description,
      imageUrl: value.imageUrl,
      products: value.products,
    });
  });

  try {
    await batch.commit();
    console.log("Documents added successfully with products as arrays");
  } catch (error) {
    console.error("Error committing batch:", error);
  }
};
