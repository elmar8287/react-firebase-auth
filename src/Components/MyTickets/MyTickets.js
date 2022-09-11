import React, {useState, useEffect} from 'react';
import "./MyTickets.css"

const MyTickets = ({user, myTickets}) => {
  const [filterDate, setfilterDate] = useState()
  const [list, setList] = useState("")

  const formatDate = (e) => {
    const rawDate = e.target.value
    const formatedDate =rawDate.split('/').reverse().join("-")
    setfilterDate(formatedDate)
    console.log("date", filterDate)
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
      <h3>You have in total {myTickets.filter(e => e.user===user.email).length} tickets</h3>
      <div className="mytickets-filter">
        <span>Filter by the appointment date: </span>
        <input type="date" value={filterDate} onChange={e => formatDate(e)} />
        <span className="clear-filter" onClick={getFilter}>Filter</span>
        <span className="clear-filter" onClick={filtering}>Clear</span>
      </div>
      <ul>
      {list && list.length>0 ?
        list
        .filter(e => (e.user===user.email))
        .map(ticket=> (

          <li>
            <div className="ticket-view">
              <h4>Appointment date: {ticket.date}</h4>
              <p>Line number: {ticket.line}</p>
            </div>
          <p>Category: {ticket.cat}</p>
          <p>Odometer: {ticket.odo}</p>
          <p>Notes: {ticket.note}</p>
          <p>Created date: {ticket.created}</p>
          </li>
        ))
        :
        <p>There are no tickets found</p>
      }
      </ul>
    </div>
  );
}

export default MyTickets;