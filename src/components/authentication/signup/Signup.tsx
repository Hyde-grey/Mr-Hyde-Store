const SignUpForm = () => {
  return (
    <div>
      <div>
        <h2>Don't have an account ?</h2>
        <p>Sign up with your email and password</p>
      </div>
      <form action="">
        <input type="text" placeholder="Display Name" />
        <input type="e-mail" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
