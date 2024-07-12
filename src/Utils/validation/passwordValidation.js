import { useState } from 'react';
import "../global.css";
import "../Auth/Auth.css"

const PasswordValidation = ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
      setError('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    onPasswordChange(newPassword, !error);
  };

  return (
    <div>
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        required
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PasswordValidation;
