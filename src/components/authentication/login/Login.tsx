import { useState, ChangeEvent, FormEvent } from "react";
import FormLayout from "../../forms/FormLayout";
import ButtonLayout from "../../button/Button";
import InputLayout from "../../forms/inputs/Inputs";
import styles from "../../forms/FormLayout.module.css";

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      console.log("this form is being submitted");
      resetFormFields();
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
        <ButtonLayout buttonType="submit">Log in</ButtonLayout>
      </div>
    </FormLayout>
  );
};

export default Login;
