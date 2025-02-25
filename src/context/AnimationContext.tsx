import React, { createContext, useContext, useState } from "react";

type AnimationContextType = {
  startAnimation: () => void;
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
  fadeOpacity: number;
  setFadeOpacity: (value: number) => void;
  cleanupAnimation: () => void;
};

const AnimationContext = createContext<AnimationContextType | null>(null);

export const AnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeOpacity, setFadeOpacity] = useState(0);

  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
    }
  };

  const cleanupAnimation = () => {
    setTimeout(() => {
      setFadeOpacity(0);
    }, 500);
  };

  return (
    <AnimationContext.Provider
      value={{
        startAnimation,
        isAnimating,
        setIsAnimating,
        fadeOpacity,
        setFadeOpacity,
        cleanupAnimation,
      }}
    >
      <style>
        {`
          @keyframes fadeAnimation {
            0% { opacity: 0; }
            60% { opacity: 0; }
            70% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
      {children}
      {isAnimating && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            pointerEvents: "none",
            zIndex: 998,
            animation: "fadeAnimation 3s forwards",
          }}
        />
      )}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
