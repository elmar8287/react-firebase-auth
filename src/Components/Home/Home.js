import React from 'react';
import Ticket from '../Ticket/Ticket.js';
import Account from '../Account/Account.js';

const Home = ({handleLogout, user}) => {
  return (
    <div className="home">
      <nav>
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

        <button type="button" onClick={handleLogout}>Logout</button>
      </nav>
      <Ticket user={user}/>
      <Account user={user}/>
    </div>
  );
}

export default Home;