import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import "./MyTickets.css"

const MyTickets = ({user}) => {
  const [myTickets, setMyTickets] = useState([]);
  const [loading, setLoading] = useState(false)
  const db = firebase.firestore().collection("Tickets");

  // useEffect(()=> {
  //   db.onSnapshot(snapshot => {
  //     setMyTickets(snapshot.docs.map(doc=>doc.data()))
  //   });
  //   console.log(myTickets)
  // },[])


  const fetchTickets = () => {
    setLoading(true)
    db.onSnapshot((querySnapshots) => {
      const items = [];
      querySnapshots.forEach((doc) => {
        items.push(doc.data());
      });
      setMyTickets(items);
      setLoading(false);
    });
  };

  useEffect(()=> {
    fetchTickets();
  },[]);

  return (
    <div  className="my-tickets">

    <h2>My tickets</h2>
    <h3>{myTickets.filter(e => e.user===user.email).length}</h3>
    <ul>
    {myTickets &&
      myTickets
      .filter(e => e.user===user.email)
      .map(ticket=> (
        <li>
        <h4>Category: {ticket.cat}</h4>
        <p>Appointment date: {ticket.date}</p>
        <p>Odometer: {ticket.odo}</p>
        <p>Your line number: {ticket.line}</p>
        <p>Notes: {ticket.note}</p>
        <p>Created date: {ticket.created}</p>
        </li>

      ))
    }

    </ul>

    </div>
  );
}

export default MyTickets;