import { createContext, useState, ReactNode } from "react";

type KeyRotationContextType = {
  rotationZ: number;
  positionY: number;
  positionX: number;
  addRotation: (amount: number) => void;
  triggerSpinAnimation: () => void;
  triggerFailAnimation: () => void;
};

export const KeyRotationContext = createContext<KeyRotationContextType>({
  rotationZ: 0,
  positionY: -0.1,
  positionX: 0,
  addRotation: () => {},
  triggerSpinAnimation: () => {},
  triggerFailAnimation: () => {},
});

export const KeyRotationProvider = ({ children }: { children: ReactNode }) => {
  const [rotationZ, setRotationZ] = useState(0);
  const [positionY, setPositionY] = useState(-0.1);
  const [positionX, setPositionX] = useState(0);

  const addRotation = (amount?: number) => {
    if (!amount) {
      return;
    }
    setRotationZ((prev) => prev + amount);
  };

  const triggerSpinAnimation = () => {
    const startTime = Date.now();
    const duration = 2000;
    const totalRotation = Math.PI * 2;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        // Easing function for more realistic key turning motion
        const progress = elapsed / duration;
        // Ease-in-out cubic for smooth start and end
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        setRotationZ(totalRotation * eased);
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const triggerFailAnimation = () => {
    const startTime = Date.now();
    const duration = 1000;
    const shakeAmount = 0.03;

    const animateFail = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      if (elapsed < duration) {
        const shakeX = Math.sin(progress * Math.PI * 12) * shakeAmount;
        const shakeY = Math.sin(progress * Math.PI * 8) * shakeAmount;

        const dampening = Math.cos(progress * Math.PI * 0.5);

        setPositionX(shakeX * dampening);
        setPositionY(-0.1 + shakeY * dampening);

        requestAnimationFrame(animateFail);
      } else {
        // Reset positions
        setPositionX(0);
        setPositionY(-0.1);
      }
    };

    requestAnimationFrame(animateFail);
  };

  return (
    <KeyRotationContext.Provider
      value={{
        rotationZ,
        positionX,
        positionY,
        addRotation,
        triggerSpinAnimation,
        triggerFailAnimation,
      }}
    >
      {children}
    </KeyRotationContext.Provider>
  );
};
