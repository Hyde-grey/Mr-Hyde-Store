import { Scroll } from "@react-three/drei";
import classNames from "classnames";

import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import LogIn from "../../components/authentication/login/Login";
import SignUp from "../../components/authentication/signup/Signup";

import styles from "./AuthStyles.module.css";
import { KeyModel } from "../../components/models/Key";
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRotationContext } from "../../contexts/KeyRotationContext.tsx";
import useWindowSize from "../../hooks/useScreenSize.tsx";

const AuthPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const { isMobile } = useWindowSize();
  const touchStartX = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { addRotation, triggerSpinAnimation, triggerFailAnimation } =
    useContext(KeyRotationContext)!;

  const redirectOnSubmit = (url: string) => {
    navigate(url);
  };

  const toggleTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const diff = touchCurrentX - touchStartX.current;
    const containerWidth = sliderRef.current.offsetWidth;

    // Calculate percentage moved
    const percentMoved = (diff / containerWidth) * 100;

    // Add a transform that follows the finger but with resistance
    if (activeTab === "login" && diff > 0) return; // Prevent right swipe on login
    if (activeTab === "signup" && diff < 0) return; // Prevent left swipe on signup

    const resistance = Math.min(Math.abs(percentMoved) / 100, 1);
    sliderRef.current.style.transform = `translateX(${
      activeTab === "login"
        ? diff * resistance
        : containerWidth + diff * resistance
    }px)`;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    // Reset the inline style
    sliderRef.current.style.transform = "";

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
