import classNames from "classnames";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import styles from "./Button.module.css";

type ButtonLayoutProps = {
  buttonType: "button" | "submit" | "reset";
  children: string;
  disabled?: boolean;
};

const ButtonLayout = ({
  buttonType,
  children,
  disabled = false,
}: ButtonLayoutProps) => {
  return (
    <button
      type={buttonType}
      className={classNames(styles.buttonLayout)}
      disabled={disabled}
    >
      {children}
      <BsFillArrowRightSquareFill />
    </button>
  );
};

export default ButtonLayout;
