import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

// Define the type for the products
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  sizes: { size: number | string; quantity: number }[];
};

// Define the type for the collections
export type Collection = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  products: Product[];
};

export const useGetCollections = () => {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionRef = collection(db, "collections");
      const collectionSnap = await getDocs(collectionRef);

      const collectionsData = collectionSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Collection[];

      setCollections(collectionsData);
    };

    fetchCollections();
  }, []);

  return collections;
};
