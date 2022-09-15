import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import "./Queue.css"

const Queue = ({user, date, close}) => {
  const [myTickets, setMyTickets] = useState([]);
  const [loading, setLoading] = useState(false)
  const db = firebase.firestore().collection("Tickets");


  const fetchTickets = () => {
    setLoading(true)
    db.onSnapshot((querySnapshots) => {
      const items = [];
      querySnapshots.forEach((doc) => {
        items.push(doc.data());
        items.sort();
      });
      setMyTickets(items);
      setLoading(false);
    });
  };

  useEffect(()=> {
    fetchTickets();
  },[]);

  const xxx = myTickets.filter(e=>e.date===date).length
  user.line = xxx+1

  if(date) {
    return (
      <div className="modal-main">
        {xxx>=10 ? <span>Yerlər yoxdur, hər-halda</span> : <p>Növbədə {xxx} nəfər var</p>}
        <h3>Sizin növbəniz {user.line}</h3>
        <button onClick={close}>Davam</button>
      </div>
    );
  }

}

export default Queue;