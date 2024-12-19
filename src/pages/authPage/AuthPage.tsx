import { Scroll } from "@react-three/drei";
import classNames from "classnames";

import MainCanvas from "../../components/MainCanvas/MainCanvas";
import LoginForm from "../../components/authentication/login/Login";
import SignUp from "../../components/authentication/signup/Signup";

import styles from "./AuthStyles.module.css";

const AuthPage = () => {
  return (
    <MainCanvas numberOfPages={1}>
      <Scroll html>
        <div className={classNames(styles.authPageContainer)}>
          <LoginForm />
          <SignUp />
        </div>
      </Scroll>
    </MainCanvas>
  );
};

export default AuthPage;
