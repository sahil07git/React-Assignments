import React, { useState } from 'react';
import logo from "./assets/images.png"

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleLogin = () => {
    setIsSignUp(false);
  };

  return (
    <div className="auth-form">
      <img src={logo} alt="" />
      {isSignUp ? (
        <div>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Mobile Number or Email" />
          <input type="password" placeholder="Password" />
          {/* ... other signup fields */}
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
        </div>
      )}
      <button onClick={isSignUp ? handleLogin : handleSignUp}>
        {isSignUp ? 'Log in' : 'Sign up'}
      </button>
      <p>
        {isSignUp ? (
          <span>Have an account? </span>
        ) : (
          <span>Don't have an account? </span>
        )}
        <span onClick={isSignUp ? handleLogin : handleSignUp}>
          {isSignUp ? 'Log in' : 'Sign up'}
        </span>
      </p>
    </div>
  );
}

export default AuthForm;