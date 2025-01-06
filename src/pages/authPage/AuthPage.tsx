import { Scroll } from "@react-three/drei";
import classNames from "classnames";

import MainCanvas from "../../components/mainCanvas/MainCanvas";
import LoginForm from "../../components/authentication/login/Login";
import SignUp from "../../components/authentication/signup/Signup";

import styles from "./AuthStyles.module.css";
import { KeyModel } from "../../components/models/Key";
import { useState } from "react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  const toggleTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <MainCanvas numberOfPages={1}>
      <KeyModel />
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
                  Login
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
                  Sign Up
                </div>
                <div
                  className={classNames(styles.linkBorder, {
                    [styles.activelinkBorder]: activeTab === "signup",
                  })}
                ></div>
              </div>
            </div>
            {activeTab === "login" ? <LoginForm /> : <SignUp />}
          </div>
        </div>
      </Scroll>
    </MainCanvas>
  );
};

export default AuthPage;
