import { Scroll } from "@react-three/drei";
import classNames from "classnames";

import MainCanvas from "../../components/MainCanvas/MainCanvas.tsx";
import LogIn from "../../components/authentication/login/Login";
import SignUp from "../../components/authentication/signup/Signup";

import styles from "./AuthStyles.module.css";
import { KeyModel } from "../../components/models/Key";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRotationContext } from "../../contexts/KeyRotationContext.tsx";
import useWindowSize from "../../hooks/useScreenSize.tsx";
const AuthPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const { isMobile } = useWindowSize();

  const { addRotation, triggerSpinAnimation, triggerFailAnimation } =
    useContext(KeyRotationContext)!;

  const redirectOnSubmit = (url: string) => {
    navigate(url);
  };

  const toggleTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <MainCanvas numberOfPages={1}>
      <KeyModel position={isMobile ? [0, 0, 0] : [0.6, 0, 0]} />
      <Scroll html>
        <div className={styles.authPageContainer}>
          <div className={styles.authComponentContainer}>
            <div className={styles.authSelectorsContainer}>
              <div>
                <div
                  className={classNames(styles.authSelector, {
                    [styles.activeTab]: activeTab === "login",
                  })}
                  onClick={() => toggleTabHandler("login")}
                >
                  Log in
                </div>
                <div
                  className={classNames(styles.linkBorder, {
                    [styles.activelinkBorder]: activeTab === "login",
                  })}
                ></div>
              </div>
              <div>
                <div
                  className={classNames(styles.authSelector, {
                    [styles.activeTab]: activeTab === "signup",
                  })}
                  onClick={() => toggleTabHandler("signup")}
                >
                  Sign up
                </div>
                <div
                  className={classNames(styles.linkBorder, {
                    [styles.activelinkBorder]: activeTab === "signup",
                  })}
                ></div>
              </div>
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
      </Scroll>
    </MainCanvas>
  );
};

export default AuthPage;
