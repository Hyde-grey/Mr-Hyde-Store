import classNames from "classnames";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import styles from "./Button.module.css";

type ButtonLayoutProps = {
  buttonType: "button" | "submit" | "reset";
  children: string;
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
    <button
      type={buttonType}
      className={classNames(styles.buttonLayout)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {isIcon && <BsFillArrowRightSquareFill />}
    </button>
  );
};

export default ButtonLayout;
