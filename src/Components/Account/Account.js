import React, {useState} from 'react';
import firebase from 'firebase';
import moment from 'moment';
import {
  Link
} from 'react-router-dom';
import "./Account.css";

const Account = ({user}) => {
  const [vendor, setVendor] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [account, setAccount] = useState("")

  let datedate = moment().format('YYYY-MM-D');

  const db = firebase.firestore()
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Accounts").add({
      user: user.email,
      vendor: vendor,
      model: model,
      plate: plate,
      company: company,
      phone: phone,
      created: datedate
    }).then((docRef) => {
      const docId = docRef.id;
      console.log(docId);
    }).catch((err) => {
      console.log("Error", err.message)
    });
    setVendor("")
    setModel("")
    setPlate("")
    setCompany("")
    setPhone("")
  };







  // const db = firebase.firestore()
  // const newDate = new Date()
  // const currentDay = newDate.getDate()
  // const currentMonth = newDate.getMonth()+1;
  // const currentYear = newDate.getFullYear();
  // const dateToday = currentDay + "." + currentMonth + "." + currentYear;
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   db.collection("Accounts").add({
  //     userName: user.displayName,
  //     userEmail: user.email,
  //     phone: phone,
  //     vendor: vendor,
  //     model: model,
  //     plate: plate,
  //     company: company,
  //     created: dateToday
  //   }).then((docRef) => {
  //     const docId = docRef.id;
  //     console.log(docId);
  //   }).catch((err) => {
  //     console.log("Error", err.message)
  //   });
  //   setVendor("")
  //   setModel("")
  //   setPlate("")
  //   setCompany("")
  //   setPhone("")
  // };

  const [saved, setSaved] = useState(false)
  const dataSaved = () => {
    setSaved(!saved)
  }

  return (
    <div className="profile-info">
      <Link to="/" className="nav-link">Back</Link>
      <h2>Profile details</h2>
      {
        saved ? <p className="success">All changes are saved succesfully!</p> : !saved
      }
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} />
        <input type="text" placeholder="Enter the car vendor" value={vendor} onChange={(e)=> setVendor(e.target.value)} />
        <input type="text" placeholder="Enter the car model" value={model} onChange={(e)=> setModel(e.target.value)} />
        <input type="text" placeholder="Enter the plate number" value={plate} onChange={(e)=> setPlate(e.target.value)} />
        <input type="text" placeholder="Enter the company" value={company} onChange={(e)=> setCompany(e.target.value)} />
        <button type="submit" onClick={dataSaved}>Save</button>
      </form>
    </div>
  );
}

export default Account;