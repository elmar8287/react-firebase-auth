import React from 'react';
import firebase from 'firebase';

const Login = ({email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError}) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return (
    <section className="login">

      <div className="loginContainer">
      <div className="app-title">
      <h2>i n l i n e r</h2>
      <p>save your time</p>
      </div>
        <input
          maxlength="50"
          placeholder="Enter your email"
          type="email"
          autoFocus
          requered
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <input
          maxlength="50"
          placeholder="Password"
          type="password"
          requered
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">

          {
            !hasAccount ? (
              <>
                <button type="button" onClick={handleLogin}>Login</button>
                <p>Not registrated? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
              </>
            ) : (
              <>
              <button type="button" onClick={handleSignup}>Sign Up</button>
              <p>Already registrated? <span  onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
            </>
            )
          }

        </div>
      </div>
    </section>
  );
}

export default Login;