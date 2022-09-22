import React, { useState, useEffect } from 'react';
import {
  Link
} from 'react-router-dom';
import firebase from 'firebase';
import moment from 'moment';
import "./Ticket.css";
import Queue from '../Queue/Queue';
import Timing from '../../Timing/Timing';

const Ticket = ({user, myTickets}) => {
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
        time: selectedTime,
        cat: cat,
        odo: odo,
        note: note,
        created: datedate,
        inLine: "1",
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
      selectedTime("")
 
  };

  const [modal, setModal] = useState(false)
  const modalHandle = () => {
    setModal(!modal)
  }

  const [created, setCreated] = useState(false);

  const [timeModal, setTimeModal] = useState(false);

  const timeModalHandle = () => {
    setTimeModal(!timeModal)
  }

  let range = myTickets.filter(e=>e.date===date).map(e=>(e.time))
  const [selectedTime, setSelectedTime] = useState("")
  const saveTime = () => {
    if(!range.includes(selectedTime)) {
      range.push(selectedTime)
      console.log(range)
    }
  }

  const timeOptions = (e) => {
    setSelectedTime(e.target.value)
  }

  const [inLineCheking, setInLineChecking] = useState(false)

  const inLineCheckingHandle = () => {
    if(myTickets.filter(e=>e.date===date)
    .filter(e=>e.user===user.email)
    .filter(e=>e.inLine==="1").length===1) {
      setInLineChecking(true)
    } else {
      setInLineChecking(false)
    }
  }

  useEffect(()=> {
    inLineCheckingHandle()
  },[date])

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
        <input type="text" required placeholder='select the time' value={selectedTime} onClick={()=> setTimeModal(true)} />
        {
        timeModal ?
          <div className="modal">
            <Timing range={range} close={timeModalHandle} saveTime={saveTime} selectedTime={selectedTime} timeOptions={timeOptions} />
          </div>
          : null
        }
        <select value={cat} onChange={(e)=> setCat(e.target.value)}>
          <option>Yağ dəyişmə</option>
          <option>Mühərrik problemi</option>
          <option>Təkər problemi</option>
          <option>Başqa</option>
        </select>
        <input type="number" min="0" maxlength="10" required placeholder="Odometer/Yürüş (km)" value={odo} onChange={(e)=> setOdo(e.target.value)} />
        <textarea type="text-area" maxlength="100" placeholder="Qeydlər" value={note} onChange={(e)=> setNote(e.target.value)} />
        {
          !inLineCheking ? <button type="submit">Yarat</button>
          : <p className="date-error">Seçdiyiniz tarixdə sorğunuz mövcud olduğu üçün başqa tarixi seçin</p>
        }
      </form>
      {
          modal ?
          <div className="modal">
            <Queue inLineCheking={inLineCheking} date={date} user={user} close={modalHandle}/>
          </div>
          : null
        }
    </div>
  );
};

export default Ticket;
