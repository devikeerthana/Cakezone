import React from "react";
import "./Login.css"; 

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Dummy login
    if (email === "admin@cakezone.com") {
      alert("Admin login");
    } else if (email === "user@cakezone.com") {
      alert("User login");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome Back</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="social-icons">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="login-right">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Sign in</h2>
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="password" name="password" placeholder="Password" required />
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <button type="submit">Sign in now</button>
          <p className="forgot-password">Lost your password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
