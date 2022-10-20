import Reac, {useState} from 'react';
import Ticket from '../Ticket/Ticket.js';
import Account from '../Account/Account.js';

const Home = ({ user, myTickets, accounts}) => {   
  const [haveAccout, setHaveAccount] = useState(false)
  return (
    <div className="home">
      {
        haveAccout ?
        <Account />
        :
        <Ticket user={user} myTickets={myTickets} accounts={accounts} />
      }
    </div>
  );
}

export default Home;