import { useState, ChangeEvent, FormEvent } from "react";
import FormLayout from "../../forms/FormLayout";
import InputLayout from "../../forms/inputs/Inputs";
import styles from "../../forms/FormLayout.module.css";
import { useLogin } from "../../../hooks/useLogin";
import StartBorder from "../../button/StartBorder";
import buttonStyles from "../../button/Button.module.css";

type FormFields = {
  email: string;
  password: string;
};

type LoginProps = {
  redirectOnSubmit: (url: string) => void;
};

const defaultFormFields: FormFields = {
  email: "",
  password: "",
};

const Login = ({ redirectOnSubmit }: LoginProps) => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;
  const { login, error, loading } = useLogin();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await login(email, password);
      if (userCredential) {
        console.log("User logged in successfully:");
        resetFormFields();
        redirectOnSubmit("/");
      }
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <FormLayout
      title="Already have an account ?"
      text="Sign in with your email and password"
      formSubmitHandler={formSubmitHandler}
    >
      <div className={styles.formInputContainer}>
        <div className={styles.inputContainer}>
          <InputLayout
            type="text"
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
        </div>
        <div className={styles.buttonContainer}>
          <StartBorder
            className={buttonStyles.buttonLayout}
            as="button"
            type="submit"
            disabled={loading}
            color="white"
            speed="5s"
          >
            {loading ? "Logging in..." : "Log in"}
          </StartBorder>
        </div>
        {error && <p>{error}</p>}
      </div>
    </FormLayout>
  );
};

export default Login;
