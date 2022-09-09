import React from 'react';

const Login = ({email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError}) => {
  return (
    <div>
      <h2>Login page</h2>
      <div>
        <input
          placeholder="Enter your email"
          type="email"
          autoFocus
          requered
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <p>{emailError}</p>
        <input
          placeholder="Password"
          type="password"
          requered
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
        <div>

          {
            hasAccount ? (
              <>
                <button type="button" onClick={handleLogin}>Sign In</button>
                <p>Do not have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
              </>
            ) : (
              <>
              <button type="button" onClick={handleSignup}>Sign Up</button>
              <p>Have an account? <span  onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
            </>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default Login;