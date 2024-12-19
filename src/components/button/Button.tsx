import classNames from "classnames";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import styles from "./Button.module.css";

type ButtonLayoutProps = {
  buttonType: "button" | "submit" | "reset";
  children: string;
};

const ButtonLayout = ({ buttonType, children }: ButtonLayoutProps) => {
  return (
    <button type={buttonType} className={classNames(styles.buttonLayout)}>
      {children}
      <BsFillArrowRightSquareFill />
    </button>
  );
};

export default ButtonLayout;
