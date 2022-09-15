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
            <h2>Xoş gəldin <span className="user-info">{user.displayName ? user.displayName : user.email}</span></h2>
            {
              user.photoURL ? <img src={user.photoURL} alt="avatar"/> : <p> </p>
            }
          </div>
          :
          <h2>Xoş gəldiniz</h2>
        }
        <Link to="/" className="nav-link">Ana səhifə</Link>
        <Link to="/tickets" className="nav-link">Sorğularım({myTickets.filter(e => e.user===user.email).length}) </Link>
        <Link to="/account" className="nav-link">Hesabım</Link>
        <Link to="/">
          <button type="button" onClick={handleLogout}>Çıxış</button>
        </Link>

      </nav>
    </div>
  );
}

export default Navbar;