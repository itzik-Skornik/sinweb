
// import React from 'react';
// import './Donations.css';


// function Donations({user}) {
//     console.log(user);
//   return (
//     <div >
//     <div  className="greetings-container">
//       <h1>שלום, {
//       user ?
//       user.firstName :
//       "אורח"
//       }!</h1>
//       <p>ברוכים הבאים לאתר שלנו.</p>
//       <a className="donation-button" href={"https://www.matara.pro/nedarimplus/online/?mosad=7007065"}>
//      לתרומות
//       </a>
//     </div></div>
//   )
// }

// export default Donations





import React from 'react';
import './Donations.css';

function Donations({ user }) {
  return (
    <div className="donations-container">
      <div className="greetings-container">
        <h1>שלום, {user ? user.firstName : "אורח"}!</h1>
        <p>ברוכים הבאים לאתר שלנו. אנחנו מזמינים אתכם לקחת חלק ולהיות שותפים במצוות הצדקה וההמשכיות של הקהילה שלנו.</p>
      </div>
      
      <div className="donation-info">
        <h2>למה חשוב לתרום?</h2>
        <p>
          התרומות שלכם מאפשרות לנו לשמר ולשפר את השירותים והפעילויות בבית הכנסת. עם תרומתכם, נוכל להרחיב את פעילותנו בקהילה, לסייע לנזקקים, ולשמור על קיום התורה והמסורת.
        </p>
        <p>
          כל תרומה, גדולה או קטנה, מקדמת אותנו עוד צעד בהשגת המטרות שלנו. תודה על התמיכה שלכם!
        </p>
      </div>

      <a className="donation-button" href="https://www.matara.pro/nedarimplus/online/?mosad=7007065">
        תרמו עכשיו
      </a>
    </div>
  );
}

export default Donations;
