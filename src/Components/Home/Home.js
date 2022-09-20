import React from 'react';
import Ticket from '../Ticket/Ticket.js';

const Home = ({ user}) => {   
  return (
    <div className="home">
      <Ticket user={user}/>
    </div>
  );
}

export default Home;