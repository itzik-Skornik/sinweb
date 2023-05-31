
import React from 'react';
import './Donations.css';


function Donations({user}) {
    console.log(user);
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
    <div  className="greetings-container">
      <h1>שלום, {
      user ?
      user.firstName :
      "אורח"
      }!</h1>
      <p>ברוכים הבאים לאתר שלנו.</p>
      <a className="donation-button" href={"https://www.matara.pro/nedarimplus/online/?mosad=7007065"}>
     לתרומות
      </a>
    </div></div>
  )
}

export default Donations





