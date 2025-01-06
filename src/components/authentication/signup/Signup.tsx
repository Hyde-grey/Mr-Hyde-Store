import { ChangeEvent, FormEvent, useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

import FormLayout from "../../forms/FormLayout";
import InputLayout from "../../forms/inputs/Inputs";
import ButtonLayout from "../../button/Button";
import styles from "../../forms/FormLayout.module.css";

type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
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
      await signUp(email, password, displayName);
      resetFormFields();
    } catch (error) {
      console.log("User sign-up failed", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormLayout
      title="Don't have an account ?"
      text="Sign up with your email and password"
      formSubmitHandler={formSubmitHandler}
    >
      <div className={styles.inputContainer}>
        <InputLayout
          type="text"
          placeholder="Display Name"
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />
        <InputLayout
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <InputLayout
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <InputLayout
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        {error && <p>{error}</p>}
        <ButtonLayout buttonType="submit">
          {loading ? "Signing Up..." : "Sign Up"}
        </ButtonLayout>
      </div>
    </FormLayout>
  );
};

export default SignUpForm;
