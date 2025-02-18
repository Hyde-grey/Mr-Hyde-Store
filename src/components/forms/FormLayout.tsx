import classNames from "classnames";
import styles from "./FormLayout.module.css";
import React from "react";

type FormLayoutProps = {
  title: string;
  text: string;
  children: React.ReactNode;
  formSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  ActionButton: React.ReactNode;
};

const FormLayout = ({
  title,
  text,
  children,
  formSubmitHandler,
  ActionButton,
}: FormLayoutProps) => {
  return (
    <div className={classNames(styles.formContainer)}>
      <div className={classNames(styles.formTitleContainer)}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={classNames(styles.formDivider)}></div>
      <form
        className={classNames(styles.formField)}
        onSubmit={formSubmitHandler}
      >
        <div className={classNames(styles.formInputContainer)}>
          <div className={classNames(styles.inputContainer)}>{children}</div>

          <div className={styles.buttonContainer}>{ActionButton}</div>
        </div>
      </form>
    </div>
  );
};

export default FormLayout;
