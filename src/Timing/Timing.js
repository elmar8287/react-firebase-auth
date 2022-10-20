import React, {useState} from 'react';
import "./Timing.css";

const Timing = ({range, close, saveTime, selectedTime, timeOptions}) => {
  const timeRange = [
    "Select the time",
    "9:00",
    "9:15",
    "9:30",
    "9:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00"
  ];

  console.log("times in Timing", range)
  const [timeSaved, setTimeSaved] = useState(true)

  return (
    <div className="modal-times-main">
      <p className='time-booking'>Here is the already booked time list</p>
      {
        range.length<=33 ?
        <div>
          <div className="modal-main-selection">
            <ul className="time-list">
            {
             range.map(e=>(
              <li className="time-set">{e}</li>
             ))
            }
            </ul>
          </div>
          <div className="time-options">
          {
            timeSaved ? 
            <div>
            <p className='time-booking'>Please, book your time from the listed range below</p>
              <select onChange={timeOptions}>
              {
                timeRange.map(e=>(<option>{e}</option>))
              }
              </select>
              {
                !range.includes(selectedTime)
                ? <span onClick={()=> {saveTime(); setTimeSaved(false)}}>Save</span>
                : <p>There is a request on this time. Please, select another time</p>
              }
            </div>
            :
            <p>Successfully saved</p>
          }
          </div>
          </div>
        : <p>No places</p>
      }
      <div className="modal-main-button">
         <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Timing;
