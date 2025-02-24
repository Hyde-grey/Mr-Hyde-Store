import { FormEvent, ReactNode } from "react";
import styles from "./FormLayout.module.css";

type FormLayoutProps = {
  title: string;
  text: string;
  formSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  ActionButton: ReactNode;
};

const FormLayout = ({
  title,
  text,
  formSubmitHandler,
  children,
  ActionButton,
}: FormLayoutProps) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitleContainer}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.formDivider} />
      <form onSubmit={formSubmitHandler}>
        {children}
        <div className={styles.buttonContainer}>{ActionButton}</div>
      </form>
    </div>
  );
};

export default FormLayout;
