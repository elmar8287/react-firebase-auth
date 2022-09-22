import React from 'react';
import Ticket from '../Ticket/Ticket.js';

const Home = ({ user, myTickets}) => {   
  return (
    <div className="home">
      <Ticket user={user} myTickets={myTickets}/>
    </div>
  );
}

export default Home;