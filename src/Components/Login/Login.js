import React from 'react';
import firebase from 'firebase';

const Login = ({email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError}) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const authWithGoogle = () => {
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <section className="login">
      <div className="loginContainer">
        <input
          placeholder="Enter your email"
          type="email"
          autoFocus
          requered
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <input
          placeholder="Password"
          type="password"
          requered
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">

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
        <div className="google-sign" onClick={authWithGoogle}>
          <h2>Sign in with Google</h2>
          <img src="https://freesvg.org/img/1534129544.png" hight="20" width="50" alt="google-icon" />
        </div>
      </div>
    </section>
  );
}

export default Login;