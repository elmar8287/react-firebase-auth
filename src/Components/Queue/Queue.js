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
          <p>Bu gune artig sorgunuz var</p> :
          xxx===33 ? <span>Yerlər yoxdur, hər-halda</span> :
          <div>
           <p>Seçdiyiniz tarixdə növbədə {xxx} nəfər var</p>  
           <h3>Sizin növbəniz {user.line} olacaq</h3>
          </div>
        }

        <button onClick={close}>Davam et</button>
      </div>
    );
  }

}

export default Queue;