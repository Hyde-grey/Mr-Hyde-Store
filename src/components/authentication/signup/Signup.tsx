import { ChangeEvent, FormEvent, useState } from "react";
import { useSignUp } from "../../../hooks/useSignUp";
import FormLayout from "../../forms/FormLayout";
import InputLayout from "../../forms/inputs/Inputs";
import styles from "../../forms/FormLayout.module.css";
import StartBorder from "../../button/StartBorder";
import buttonStyles from "../../button/Button.module.css";

type FormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SignUpProps = {
  redirectOnSubmit: (url: string) => void;
};

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ redirectOnSubmit }: SignUpProps) => {
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
      }
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
      title="Don't have an account?"
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

        <StartBorder
          className={buttonStyles.buttonLayout}
          as="button"
          type="submit"
          disabled={loading}
          color="white"
          speed="5s"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </StartBorder>
        {error && <p>{error}</p>}
      </div>
    </FormLayout>
  );
};

export default SignUp;
