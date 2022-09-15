import React, {useState} from 'react';
import firebase from 'firebase';
import moment from 'moment';
import {
  Link
} from 'react-router-dom';
import "./Account.css";

const Account = ({user, accounts}) => {
  const [vendor, setVendor] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  let datedate = moment().format('YYYY-MM-D');
  // const accountsList = accounts.filter(e => e.created==="2022-09-11")


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
    }).catch((err) => {
    });
    setVendor("")
    setModel("")
    setPlate("")
    setCompany("")
    setPhone("")
  };

  const [saved, setSaved] = useState(false)
  const dataSaved = () => {
    setSaved(!saved)
  }

  return (
    <div className="profile-info">
      <Link to="/" className="nav-link">Qeriyə</Link>
      <h2>Hesab məlumatları</h2>
      {
        saved ? <p className="success">Yadda saxlanıldı!</p> : !saved
      }
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} />
        <input type="text" placeholder="Enter the car vendor" value={vendor} onChange={(e)=> setVendor(e.target.value)} />
        <input type="text" placeholder="Enter the car model" value={model} onChange={(e)=> setModel(e.target.value)} />
        <input type="text" placeholder="Enter the plate number" value={plate} onChange={(e)=> setPlate(e.target.value)} />
        <input type="text" placeholder="Enter the company" value={company} onChange={(e)=> setCompany(e.target.value)} />
        <button type="submit" onClick={dataSaved}>Yadda saxla</button>
      </form>
      {accounts &&
        accounts.map((e)=> {
          <div className="ticket-form">
            <h2>{e.created}</h2>
          </div>
        })
      }
    </div>
  );
}

export default Account;