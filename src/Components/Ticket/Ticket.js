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
      }).catch((err) => {
      });
      setDate("")
      setCat("")
      setOdo("")
      setNote("")
 
  };

  const [modal, setModal] = useState(false)
  const modalHandle = () => {
    setModal(!modal)
  }

  return (
    <div className="ticket">
      <h2>Növbə üçün sorğu</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="date" required min={datedate} placeholder="Select the date" value={date} onChange={(e)=> {setDate(e.target.value); modalHandle()}} />
        <select value={cat} onChange={(e)=> setCat(e.target.value)}>
          <option>Yağ dəyişmə</option>
          <option>Mühərrik problemi</option>
          <option>Təkər problemi</option>
          <option>Başqa</option>
        </select>
        <input type="number" min="0" required placeholder="Odometer" value={odo} onChange={(e)=> setOdo(e.target.value)} />
        <textarea type="text-area" placeholder="Qeydlər" value={note} onChange={(e)=> setNote(e.target.value)} />
        <button type="submit">Yarat</button>
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