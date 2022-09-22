import React, {useState, useEffect} from 'react';
import "./MyTickets.css"

const MyTickets = ({user, myTickets}) => {
  const [filterDate, setfilterDate] = useState()
  const [list, setList] = useState("")

  const formatDate = (e) => {
    const rawDate = e.target.value
    const formatedDate =rawDate.split('/').reverse().join("-")
    setfilterDate(formatedDate)
  }

  const filtering= () => {
    setList(myTickets)
  }

  const getFilter = () => {
    setList(myTickets.filter(e => e.date===filterDate))
  }

  useEffect(()=> {
    filtering()
  }, [])
  

  
  return (
    <div  className="my-tickets">
      <h3>Sizin ümümi {myTickets.filter(e => e.user===user.email).length} sorğunuz var</h3>
      <div className="mytickets-filter">
        <span>Sorğu tarixi ilə filtrə elə: </span>
        <input type="date" value={filterDate} onChange={e => formatDate(e)} />
        <span className="clear-filter" onClick={filterDate && getFilter}>Filtrə</span>
        <span className="clear-filter" onClick={filtering}>Sil</span>
      </div>
      <ul>
      {list && list.length>0 ?
        list
        .filter(e => (e.user===user.email))
        .map(ticket=> (

          <li>
            <div className="ticket-view">
              <h4>Növbə vaxtı: {ticket.date} saat {ticket.time}</h4>
              <p>Növbə: {ticket.line}</p>
            </div>
            <p>Kategoriya: {ticket.cat}</p>
            <p>Odometer: {ticket.odo}</p>
            <p>Qeydlər: {ticket.note}</p>
            <p>Yaratma tarixi: {ticket.created}</p>
          </li>
        ))
        :
        <p>Sorğu tapılmadı</p>
      }
      </ul>
    </div>
  );
}

export default MyTickets;