import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
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

  let minDate = moment().format('YYYY-MM-D');
  let datedate = moment().format('YYYY-MM-D HH:mm:ss');

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
      setCreated(true)
 
  };

  const [modal, setModal] = useState(false)
  const modalHandle = () => {
    setModal(!modal)
  }

  const [created, setCreated] = useState(false)

  return (
    <div className="ticket">
      <h2>Növbə üçün sorğu</h2>
      {created && 
        <div className="success-login">
          <h4>Növbə uğurla yaradıldı!</h4>
          <p>Sizin növbəniz</p>
          <h3>{user.line}</h3>Daha ətraflı 
      <Link to="/tickets" className="success-login-link">Sorğularım</Link> bölməsinə keçin edin</div>}
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="date" required min={minDate} placeholder="Select the date" value={date} onChange={(e)=> {setDate(e.target.value); modalHandle()}} />
        <input type="text" required placeholder='select the time' onClick={()=> console.log("Time selected")} />
        <select value={cat} onChange={(e)=> setCat(e.target.value)}>
          <option>Yağ dəyişmə</option>
          <option>Mühərrik problemi</option>
          <option>Təkər problemi</option>
          <option>Başqa</option>
        </select>
        <input type="number" min="0" maxlength="10" required placeholder="Odometer" value={odo} onChange={(e)=> setOdo(e.target.value)} />
        <textarea type="text-area" maxlength="100" placeholder="Qeydlər" value={note} onChange={(e)=> setNote(e.target.value)} />
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
