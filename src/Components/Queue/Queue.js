import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import "./Queue.css"

const Queue = ({user, date, close, inLineCheking}) => {
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

  console.log("the inline checking", inLineCheking)

  if(date) {
    return (
      <div className="modal-main">
        {
          inLineCheking ?
          <p>You have already created ticket for today</p> :
          xxx===33 ? <span>No places, but </span> :
          <div>
           <p>{xxx} waiting in line on selected date</p>  
           <h3>Your line number will be {user.line}</h3>
          </div>
        }

        <button onClick={close}>Go on</button>
      </div>
    );
  }

}

export default Queue;