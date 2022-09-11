import React from 'react';
import {
  Link
} from 'react-router-dom';
import "../App/App.css"

const Navbar = ({handleLogout, user, myTickets}) => {
  return (
    <div>
      <nav  className="navbar">
        {
          user ?
          <div className="avatar">
            <h2>Welcome <span className="user-info">{user.displayName ? user.displayName : user.email}</span></h2>
            {
              user.photoURL ? <img src={user.photoURL} alt="avatar"/> : null
            }
          </div>
          :
          <h2>Wellcome user</h2>
        }
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tickets" className="nav-link">My tickets ({myTickets.filter(e => e.user===user.email).length}) </Link>
        <Link to="/account" className="nav-link">Account editing</Link>
        <Link to="/">
          <button type="button" onClick={handleLogout}>Logout</button>
        </Link>

      </nav>
    </div>
  );
}

export default Navbar;