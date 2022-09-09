import React from 'react';
import "./Ticket.css"

const Ticket = () => {
  return (
    <div className="ticket">
      <h2>Create the ticket</h2>
      <form className="ticket-form">
        <input type="text" placeholder="Select the date"/>
        <input type="text" placeholder="Select the category"/>
        <input type="text" placeholder="Odometer" />
        <input type="text" placeholder="Upload file (max 10mb)"/>
        <input type="text" placeholder="Notes"/>
        <button type="button">Create</button>
      </form>
    </div>
  );
};

export default Ticket;
