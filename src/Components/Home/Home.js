import React from 'react';
import Ticket from '../Ticket/Ticket.js';

const Home = ({handleLogout, user}) => {
  return (
    <div className="home">
      <nav>
        <h2>Wellcome <span className="user-email">{user.email}</span></h2>
        <button type="button" onClick={handleLogout}>Logout</button>
      </nav>
      <Ticket />
    </div>
  );
}

export default Home;