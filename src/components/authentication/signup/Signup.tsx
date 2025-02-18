import { ChangeEvent, FormEvent, useState } from "react";
import { useSignUp } from "../../../hooks/useSignUp";
import FormLayout from "../../forms/FormLayout";
import InputLayout from "../../forms/inputs/Inputs";

import StartBorder from "../../button/StartBorder";
import buttonStyles from "../../button/Button.module.css";
import styles from "../../forms/FormLayout.module.css";
type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SignUpProps = {
  redirectOnSubmit: (url: string) => void;
  addRotation: (amount: number) => void;
  triggerSpinAnimation: () => void;
  triggerFailAnimation: () => void;
};

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({
  redirectOnSubmit,
  addRotation,
  triggerSpinAnimation,
  triggerFailAnimation,
}: SignUpProps) => {
  const { signUp, error, loading } = useSignUp();
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const success = await signUp(email, password, displayName);
      if (success) {
        resetFormFields();
        redirectOnSubmit("/");
        setTimeout(() => {
          triggerSpinAnimation();
        }, 2000);
      } else {
        triggerFailAnimation();
      }
    } catch (error) {
      console.log("User sign-up failed", error);
      triggerFailAnimation();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormLayout
      title="Don't have an account?"
      text="Sign up with your email and password"
      formSubmitHandler={formSubmitHandler}
      ActionButton={
        <StartBorder
          className={buttonStyles.buttonLayout}
          as="button"
          type="submit"
          disabled={loading}
          color="white"
          speed="5s"
        >
          <p>{loading ? "Signing Up..." : "Sign Up"}</p>
        </StartBorder>
      }
    >
      <div className={styles.formInputContainer}>
        <div className={styles.inputContainer}>
          <InputLayout
            type="text"
            placeholder="Display Name"
            onChange={handleChange}
            value={displayName}
            name="displayName"
            addRotation={addRotation}
          />
          <InputLayout
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            name="email"
            addRotation={addRotation}
          />
          <InputLayout
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            name="password"
            addRotation={addRotation}
          />
          <InputLayout
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={confirmPassword}
            name="confirmPassword"
            addRotation={addRotation}
          />
        </div>

        {error && <p className={styles.message}>{error}</p>}
      </div>
    </FormLayout>
  );
};

export default SignUp;
