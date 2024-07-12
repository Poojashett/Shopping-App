import { useState } from "react";
import "./Auth.css";
import "../global.css";
import PasswordValidation from "../validation/passwordValidation"

const LoginForm = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handlePasswordChange = (password, isValid) => {
    setIsPasswordValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPasswordValid) {
      console.log("Password is valid!");
    } else {
      console.log("Password is invalid.");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
          <PasswordValidation onPasswordChange={handlePasswordChange} />
        <button  className="formbutton" type="submit" disabled={!isPasswordValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
