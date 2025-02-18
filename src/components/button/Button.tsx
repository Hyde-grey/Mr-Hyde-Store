import classNames from "classnames";
import { ReactNode } from "react";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import styles from "./Button.module.css";

type ButtonLayoutProps = {
  buttonType: "button" | "submit" | "reset";
  children: string | ReactNode;
  disabled?: boolean;
  isIcon?: boolean;
  onClick?: () => void;
};

const ButtonLayout = ({
  buttonType,
  children,
  disabled = false,
  isIcon = false,
  onClick,
}: ButtonLayoutProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        type={buttonType}
        className={classNames(styles.buttonLayout)}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
        {isIcon && <BsFillArrowRightSquareFill />}
      </button>
    </div>
  );
};

export default ButtonLayout;
