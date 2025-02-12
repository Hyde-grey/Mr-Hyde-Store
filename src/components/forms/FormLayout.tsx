import classNames from "classnames";
import styles from "./FormLayout.module.css";
import React from "react";

type FormLayoutProps = {
  title: string;
  text: string;
  children: React.ReactNode;
  formSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormLayout = ({
  title,
  text,
  children,
  formSubmitHandler,
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
        {children}
      </form>
    </div>
  );
};

export default FormLayout;
