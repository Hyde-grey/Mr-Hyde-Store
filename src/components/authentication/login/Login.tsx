import React from "react";
import FormLayout from "../../forms/FormLayout";
import ButtonLayout from "../../button/Button";

const LoginForm = () => {
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("this form is being submitted");
  };

  return (
    <FormLayout
      title="Already have an account ?"
      text="Signin with your email and password"
      formSubmitHandler={formSubmitHandler}
    >
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <ButtonLayout buttonType="submit">Login</ButtonLayout>
    </FormLayout>
  );
};

export default LoginForm;
