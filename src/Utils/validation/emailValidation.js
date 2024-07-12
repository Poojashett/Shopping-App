import React, { useState } from "react";

const EmailValidation = ({ onValidEmailChange, onEmailInputChange }) => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const isValid = validateEmail(newEmail);
    onValidEmailChange(isValid);
    onEmailInputChange(newEmail); // Notify parent about the input change
  };

  return (
    <input
      type="email"
      value={email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="email-input"
    />
  );
};

export default EmailValidation;
