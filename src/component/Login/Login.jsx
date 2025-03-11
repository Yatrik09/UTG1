import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Correct CSS Module import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=\S+$).{8,16}$/;

    if (!email) {
      setEmailError("Enter Email");
      return;
    } else if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      return;
    } else if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    // On successful login, redirect to home page
    navigate("/");
  };

  return (
    <div className={styles["login-container"]}>  {/* Applied CSS Module */}
      <h2>Login</h2>
      <form onSubmit={validateLogin}>
        <div className={styles["input-group"]}>  {/* Applied CSS Module */}
          <label>Email ID:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={styles["text-danger"]}>{emailError}</p>  {/* Applied CSS Module */}
        </div>

        <div className={styles["input-group"]}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles["text-danger"]}>{passwordError}</p>
        </div>

        <button type="submit" className={styles["login-btn"]}>Login</button>  {/* Applied CSS Module */}
      </form>

      <div className={styles["signup-link"]}>
        Don't have an account?{" "}
        <span onClick={() => navigate("/sign")} className={styles["signup-text"]}>
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
