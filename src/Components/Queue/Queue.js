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
  user.line = xxx

  if(date) {
    return (
      <div className="modal-main">
        {xxx>=10 ? <span>No places, anycase</span> : <p>There are {xxx-1>=0 ? xxx : 0} in the line</p>}
        <h3>Your line number will be {user.line+1}</h3>
        <button onClick={close}>Countinue</button>
      </div>
    );
  }

}

export default Queue;