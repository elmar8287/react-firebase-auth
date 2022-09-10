import React from 'react';
import Ticket from '../Ticket/Ticket.js';
import Account from '../Account/Account.js';
import MyTickets from '../MyTickets/MyTickets.js';

const Home = ({ user}) => {
  return (
    <div className="home">
      <Ticket user={user}/>
      {
        false && <Account user={user}/>
      }
      <MyTickets user={user}/>
    </div>
  );
}

export default Home;