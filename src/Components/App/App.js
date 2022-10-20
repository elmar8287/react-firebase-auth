import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import fire from '../Firebase/Fire';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Account from '../Account/Account';
import "./App.css";
import Navbar from '../Navbar/Navbar';
import MyTickets from '../MyTickets/MyTickets';
import firebase from 'firebase';
import About from '../About/About';

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        };
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        };
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire
      .auth()
      .onAuthStateChanged((user) => {
        if(user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
    });
  };

  useEffect(()=> {
    authListener();
  },[]);

  const [myTickets, setMyTickets] = useState([]);
  const [loading, setLoading] = useState(false)
  const db = firebase.firestore().collection("Tickets").orderBy('created', 'desc');

  const fetchTickets = () => {
    setLoading(true)
    db.onSnapshot((querySnapshots) => {
      const items = [];
      querySnapshots.forEach((doc) => {
        items.push(doc.data());
      });
      setMyTickets(items);
      setLoading(false);
    });
  };

  useEffect(()=> {
    fetchTickets();
  },[]);

  const [accounts, setAccounts] = useState([]);
  const db_accounts = firebase.firestore().collection("Accounts")

  const fetchAccounts = () => {
    db_accounts.onSnapshot((querySnapshots) => {
      const items = [];
      querySnapshots.forEach((doc) => {
        items.push(doc.data());
      });
      setAccounts(items);
    });
  };

  useEffect(()=> {
    fetchAccounts();
  },[]);
 
  return (
    <Router>
    <div className="App">
    {
      user && <Navbar handleLogout={handleLogout} user={user} myTickets={myTickets}/>
    }

      <Routes>
      {
        user ? (
          <Route path="/" element={<Home
            user={user}
            myTickets={myTickets}
            accounts={accounts}
          />} />
        ) : (
          <Route path="/" element={<Login
            email={email}
            setEmail={setEmail}
            password={password} 
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
        />} />
        )
      }
      <Route path="/account" element={<Account user={user} accounts={accounts} />} />
      <Route path="/about" element={<About user={user} />} />
      <Route path="/tickets" element={<MyTickets user={user} myTickets={myTickets}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;