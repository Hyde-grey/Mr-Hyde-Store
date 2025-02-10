import { useEffect } from "react";

// Create a const for the storage key to avoid typos and maintain consistency
const FAVORITES_STORAGE_KEY = "favorites" as const;

export const useSaveFavoritesToLocalStorage = (favorites: number[]): void => {
  useEffect(() => {
    try {
      if (!favorites.length) {
        localStorage.removeItem(FAVORITES_STORAGE_KEY);
        return;
      }
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to local storage:", error);
    }
  }, [favorites]);
};

export const useFavoritesFromLocalStorage = (): number[] => {
  try {
    const favoritesData = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!favoritesData) {
      return [];
    }
    const parsed = JSON.parse(favoritesData);
    // Validate that we got an array of numbers
    if (
      Array.isArray(parsed) &&
      parsed.every((item) => typeof item === "number")
    ) {
      return parsed;
    }
    return [];
  } catch (error) {
    console.error("Failed to retrieve favorites from local storage:", error);
    return [];
  }
};
