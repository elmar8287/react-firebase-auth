import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import "./Ticket.css";

const Ticket = ({user}) => {
  const [date, setDate] = useState('');
  const [cat, setCat] = useState('');
  const [odo, setOdo] = useState('');
  const [note, setNote] = useState('');

  const db = firebase.firestore()
  const newDate = new Date()
  const currentDay = newDate.getDate()
  const currentMonth = newDate.getMonth()+1;
  const currentYear = newDate.getFullYear();
  const dateToday = currentDay + "." + currentMonth + "." + currentYear;
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Tickets").add({
      user: user.email,
      date: date,
      cat: cat,
      odo: odo,
      note: note,
      created: dateToday
    }).then((docRef) => {
      const docId = docRef.id;
      console.log(docId);
    }).catch((err) => {
      console.log("Error", err.message)
    });
    setDate("")
    setCat("")
    setOdo("")
    setNote("")
  };

  return (
    <div className="ticket">
      <h2>Create the ticket</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Select the date" value={date} onChange={(e)=> setDate(e.target.value)} />
        <input type="text" placeholder="Select the category" value={cat} onChange={(e)=> setCat(e.target.value)} />
        <input type="text" placeholder="Odometer" value={odo} onChange={(e)=> setOdo(e.target.value)} />
        <textarea type="text-area" placeholder="Notes" value={note} onChange={(e)=> setNote(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Ticket;
