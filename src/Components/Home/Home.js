import React from 'react';
import Ticket from '../Ticket/Ticket.js';
import Account from '../Account/Account.js';

const Home = ({ user}) => {
  return (
    <div className="home">
      <Ticket user={user}/>
      {
        false && <Account user={user}/>
      }
    </div>
  );
}

export default Home;