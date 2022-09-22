import React, {useState} from 'react';
import "./Timing.css";

const Timing = ({close, myTime, times, setMyTimeHandle, saveTime, selectedTime, timeOptions}) => {
  const xxx = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00"
  ];

  const [timeSaved, setTimeSaved] = useState(true)

  return (
    <div className="modal-times-main">
      <ul className="time-list">
      {
        times.map(e=>(
          <li className="time-set">{e}</li>
        ))
      }
      </ul>

      {
        timeSaved ? 
        <div>
        <select onChange={timeOptions}>
        {
          xxx.map(e=>(<option>{e}</option>))
        }
        </select>
        {
          !times.includes(selectedTime)
          ? <span onClick={()=> {saveTime(); setTimeSaved(false)}}>Yadda saxla</span>
          : <p>Bu vaxtda növbə var. Xahiş edirik başqa vaxt seçəsiniz</p>
        }
        
        </div>
        :
        <p>Uğurla yadda saxlanıldı</p>
      }
      <button onClick={close}>Bağla</button>
    </div>
  );
}

export default Timing;