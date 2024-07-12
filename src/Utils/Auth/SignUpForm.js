import "./Auth.css";
import "../global.css";
import { useState } from "react";
import PasswordValidation from "../validation/passwordValidation"


const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPasswordError) {
      alert("Please fix the errors before submitting.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  const isFormValid = () => {
    return !confirmPasswordError && email !== "" && password !== "" && confirmPassword !== "";
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <PasswordValidation
          password={password}
          onPasswordChange={setPassword}
        />
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {confirmPasswordError && (
            <div className="error">{confirmPasswordError}</div>
          )}
        </div>
        <button type="submit" disabled={!isFormValid()}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
