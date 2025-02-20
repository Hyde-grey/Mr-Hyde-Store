import { Scroll } from "@react-three/drei";
import classNames from "classnames";

import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import LogIn from "../../components/authentication/login/Login";
import SignUp from "../../components/authentication/signup/Signup";

import styles from "./AuthStyles.module.css";
import { KeyModel } from "../../components/models/Key";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRotationContext } from "../../contexts/KeyRotationContext.tsx";
import useWindowSize from "../../hooks/useScreenSize.tsx";

const AuthPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const { isMobile } = useWindowSize();
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isSwipingRef = useRef(false);
  const swipeDirectionRef = useRef<"horizontal" | "vertical" | null>(null);

  const { addRotation, triggerSpinAnimation, triggerFailAnimation } =
    useContext(KeyRotationContext)!;

  const redirectOnSubmit = (url: string) => {
    navigate(url);
  };

  const toggleTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Reset transform when tab changes
    if (sliderRef.current) {
      sliderRef.current.style.transform = "";
    }
  }, [activeTab]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwipingRef.current = true;
    swipeDirectionRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current || !containerRef.current || !isSwipingRef.current)
      return;

    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;
    const diffX = touchCurrentX - touchStartX.current;
    const diffY = touchCurrentY - touchStartY.current;
    const containerWidth = containerRef.current.offsetWidth;

    // Determine swipe direction if not already set
    if (!swipeDirectionRef.current) {
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);
      if (absX > absY && absX > 10) {
        swipeDirectionRef.current = "horizontal";
      } else if (absY > absX && absY > 10) {
        swipeDirectionRef.current = "vertical";
        isSwipingRef.current = false;
        return;
      }
    }

    // Only handle horizontal swipes
    if (swipeDirectionRef.current === "horizontal") {
      e.preventDefault(); // Prevent scrolling when swiping horizontally

      // Calculate percentage moved
      const percentMoved = (diffX / containerWidth) * 100;

      // Add resistance to the swipe
      if (activeTab === "login" && diffX > 0) return; // Prevent right swipe on login
      if (activeTab === "signup" && diffX < 0) return; // Prevent left swipe on signup

      const resistance = Math.min(Math.abs(percentMoved) / 100, 1);
      const baseTransform = activeTab === "signup" ? containerWidth / 2 : 0;
      const newTransform = baseTransform + diffX * resistance;

      sliderRef.current.style.transform = `translateX(${newTransform}px)`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!sliderRef.current || !isSwipingRef.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    // Reset states
    isSwipingRef.current = false;
    swipeDirectionRef.current = null;

    // Reset the inline style with transition
    sliderRef.current.style.transition = "transform 0.3s ease";
    sliderRef.current.style.transform = "";

    // Reset the transition after it completes
    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "";
      }
    }, 300);

    // If the swipe was long enough, switch tabs
    if (Math.abs(diff) > 50) {
      if (diff < 0 && activeTab === "login") {
        setActiveTab("signup");
      } else if (diff > 0 && activeTab === "signup") {
        setActiveTab("login");
      }
    }
  };

  return (
    <MainCanvas numberOfPages={1}>
      <KeyModel position={isMobile ? [0, 0, 0] : [0.6, 0, 0]} />
      <Scroll html>
        <div className={styles.authPageContainer}>
          <div className={styles.formWrapper}>
            <div className={styles.authComponentContainer}>
              <div
                ref={containerRef}
                className={styles.authSelectorsContainer}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className={classNames(styles.authSelector, {
                    [styles.activeTab]: activeTab === "login",
                  })}
                  onClick={() => toggleTabHandler("login")}
                  data-tab="login"
                >
                  Log in
                </div>
                <div
                  className={classNames(styles.authSelector, {
                    [styles.activeTab]: activeTab === "signup",
                  })}
                  onClick={() => toggleTabHandler("signup")}
                  data-tab="signup"
                >
                  Sign up
                </div>
                <div
                  className={styles.slider}
                  data-active={activeTab}
                  ref={sliderRef}
                ></div>
              </div>
              {activeTab === "login" ? (
                <LogIn
                  redirectOnSubmit={redirectOnSubmit}
                  addRotation={addRotation}
                  triggerSpinAnimation={triggerSpinAnimation}
                  triggerFailAnimation={triggerFailAnimation}
                />
              ) : (
                <SignUp
                  redirectOnSubmit={redirectOnSubmit}
                  addRotation={addRotation}
                  triggerSpinAnimation={triggerSpinAnimation}
                  triggerFailAnimation={triggerFailAnimation}
                />
              )}
            </div>
          </div>
        </div>
      </Scroll>
    </MainCanvas>
  );
};

export default AuthPage;
