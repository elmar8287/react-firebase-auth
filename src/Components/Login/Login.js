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
                <p>Not registrated? <span onClick={() => setHasAccount(!hasAccount)}>Register</span></p>
              </>
            ) : (
              <>
              <button type="button" onClick={handleSignup}>Register</button>
              <p>Already registrated? <span  onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
            </>
            )
          }

        </div>
        <div className="google-sign" onClick={authWithGoogle}>
          <h2>Login with Google</h2>
          <img src="https://freesvg.org/img/1534129544.png" hight="20" width="50" alt="google-icon" />
        </div>
      </div>
    </section>
  );
}

export default Login;