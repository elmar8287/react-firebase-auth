import React, {useState} from 'react';
import firebase from 'firebase';
import "./Account.css";

const Account = ({user}) => {
  const [vendor, setVendor] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [company, setCompany] = useState('');

  const db = firebase.firestore()
  const newDate = new Date()
  const currentDay = newDate.getDate()
  const currentMonth = newDate.getMonth()+1;
  const currentYear = newDate.getFullYear();
  const dateToday = currentDay + "." + currentMonth + "." + currentYear;
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Accounts").add({
      userName: user.displayName,
      userEmail: user.email,
      vendor: vendor,
      model: model,
      plate: plate,
      company: company,
      created: dateToday
    }).then((docRef) => {
      const docId = docRef.id;
      console.log(docId);
    }).catch((err) => {
      console.log("Error", err.message)
    });
  };

  return (
    <div className="profile-info">
      <h2>Profile details</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the car vendor" value={vendor} onChange={(e)=> setVendor(e.target.value)} />
        <input type="text" placeholder="Enter the car model" value={model} onChange={(e)=> setModel(e.target.value)} />
        <input type="text" placeholder="Enter the plate number" value={plate} onChange={(e)=> setPlate(e.target.value)} />
        <input type="text" placeholder="Enter the company" value={company} onChange={(e)=> setCompany(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Account;