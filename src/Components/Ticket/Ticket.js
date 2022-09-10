import React, { useState } from 'react';
import firebase from 'firebase';
import moment from 'moment';
import "./Ticket.css";
import Queue from '../Queue/Queue';

const Ticket = ({user}) => {
  const [date, setDate] = useState('');
  const [cat, setCat] = useState('');
  const [odo, setOdo] = useState('');
  const [note, setNote] = useState('');
  const [lastAdded, setLastAdded] = useState("")
  const [showLast, setShowLast] = useState("")

  let datedate = moment().format('YYYY-MM-D');

  const db = firebase.firestore()
  const handleSubmit = (e) => {
    if(date >= datedate ) {
      e.preventDefault();
      db.collection("Tickets").add({
        user: user.email,
        date: date,
        cat: cat,
        odo: odo,
        note: note,
        created: datedate,
        line: user.line
      }).then((docRef) => {
        const docId = docRef.id;
        setLastAdded(docId)
        console.log(docId);
      }).catch((err) => {
        console.log("Error", err.message)
      });
      setDate("")
      setCat("")
      setOdo("")
      setNote("")
    } else {
      return alert("Enter the future date")
    }
  };

  const [modal, setModal] = useState(false)
  const modalHandle = () => {
    setModal(!modal)
  }

  return (
    <div className="ticket">
      <h2>Create the ticket</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="date" required placeholder="Select the date" value={date} onChange={(e)=> {setDate(e.target.value); modalHandle()}} />
        <select value={cat} onChange={(e)=> setCat(e.target.value)}>
          <option>Oil change</option>
          <option>Engine problem</option>
          <option>Weells</option>
          <option>Other</option>
        </select>
        <input type="number" min="0" required placeholder="Odometer" value={odo} onChange={(e)=> setOdo(e.target.value)} />
        <textarea type="text-area" placeholder="Notes" value={note} onChange={(e)=> setNote(e.target.value)} />
        <button type="submit">Create</button>
      </form>
      {
          modal ?
          <div className="modal">
            <Queue date={date} user={user} close={modalHandle}/>
          </div>
          : null
        }
    </div>
  );
};

export default Ticket;
