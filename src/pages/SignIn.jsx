import React from "react";

const SignIn = () => {
  return (
    <div className="auth">
      <div className="auth-content">
        <h1>Sign in</h1>
        <form action="">
          <label htmlFor="userName">Username</label>
          <input type="text" placeholder="Username" name="userName" required />
          <label htmlFor="userName">Username</label>
          <input type="text" placeholder="Username" name="userName" required />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
