import React from 'react';

const Home = ({handleLogout}) => {
  return (
    <div>
      <nav>
        <h2>Wellcome</h2>
        <button type="button" onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default Home;