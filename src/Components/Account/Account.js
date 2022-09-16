import React, {useState, useEffect} from 'react';
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
  const [year, setYear] = useState('');

  let datedate = moment().format('YYYY-MM-D');
  // const accountsList = accounts.filter(e => e.created==="2022-09-11")


  const db = firebase.firestore()
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Accounts").add({
      user: user.email,
      vendor: vendor,
      model: model,
      year: year,
      plate: plate,
      company: company,
      phone: phone,
      created: datedate,
      hasProfile: "1"
    }).then((docRef) => {
      const docId = docRef.id;
    }).catch((err) => {
    });
    setVendor("")
    setYear("")
    setModel("")
    setPlate("")
    setCompany("")
    setPhone("")
  };

  const [saved, setSaved] = useState(false)
  const dataSaved = () => {
    setSaved(!saved)
  }

  let a = accounts.filter(e => e.hasProfile==="1").filter(e=> e.user===user.email)

  return (
    <div className="profile-info">
      <Link to="/" className="nav-link">Qeriyə</Link>
      <h2>Hesab məlumatları</h2>
      {
        saved ? <p className="success">Yadda saxlanıldı!</p> : !saved
      }
      {
        a.length === 0 && 
        <form className="ticket-form" onSubmit={handleSubmit}>
          <input type="number" required maxlength="50" placeholder="Telefon nömrəniz" value={phone} onChange={(e)=> setPhone(e.target.value)} />
          <input type="text" required maxlength="50" placeholder="Avtomaşın istehsalçısı (Audi, Skoda, ...)" value={vendor} onChange={(e)=> setVendor(e.target.value)} />
          <input type="text" required maxlength="50" placeholder="Avtomaşın modeli (A6, Octavia, ...)" value={model} onChange={(e)=> setModel(e.target.value)} />
          <input type="number" required maxlength="50" placeholder="Burxılış ili" value={year} onChange={(e)=> setYear(e.target.value)} />
          <input type="text" required maxlength="50" placeholder="Avtomaşın qeydiyyat nömrəsi" value={plate} onChange={(e)=> setPlate(e.target.value)} />
          <input type="text" maxlength="50" placeholder="İş yeriniz/şirkətin adı" value={company} onChange={(e)=> setCompany(e.target.value)} />
          <button type="submit" onClick={dataSaved}>Yadda saxla</button>
        </form>
      }

      {accounts &&
        accounts
        .filter(e=> e.user===user.email)
        .map(e=> (
          <div className="profile-view">
            <h2>{e.user}</h2>
            <p>İş yeri: {e.company}</p>
            <p>{e.vendor} / {e.model} markalı avtomaşın</p>
            <p>Buraxılış ili: {e.year}</p>
            <p>Qeydiyyat nömrəsi: {e.plate}</p>
            <p>Telefon nömrəsi: {e.phone}</p>
          </div>
        ))
      }

    </div>
  );
}

export default Account;