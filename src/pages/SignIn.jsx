import React from "react";

const SignIn = () => {
  return (
    <div className="auth">
      <div className="auth-content">
        <h1>Sign in</h1>
        <form action="">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" name="username" required />
          <label htmlFor="username">Password</label>
          <input type="text" placeholder="Password" name="password" required />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
