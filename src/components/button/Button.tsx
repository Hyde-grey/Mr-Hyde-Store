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
  isLoading?: boolean;
};

const ButtonLayout = ({
  buttonType,
  children,
  disabled = false,
  isIcon = false,
  onClick,
  isLoading = false,
}: ButtonLayoutProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        type={buttonType}
        className={classNames(styles.buttonLayout, {
          [styles.buttonDisabled]: disabled || isLoading,
        })}
        disabled={disabled || isLoading}
        onClick={onClick}
      >
        {isLoading ? (
          <div className={styles.loadingSpinner}>
            <span className={styles.loadingText}>Loading...</span>
          </div>
        ) : (
          <>
            {children}
            {isIcon && <BsFillArrowRightSquareFill />}
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonLayout;
