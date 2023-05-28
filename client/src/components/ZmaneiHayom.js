import React, { useState, useEffect } from 'react';
import Hebcal from 'hebcal';
import { HebrewCalendar, HDate, Location, Event } from '@hebcal/core';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// function ZmaneiHayom() {

//--------------------- //

// let date = new Date()
// const options = {
//   year: date.getFullYear(), // שנה
//   isHebrewYear: true,
//   candlelighting: true,
//   location: Location.lookup('San Francisco'),
//   sedrot: true,
//   omer: true,
// };
// const events = HebrewCalendar.calendar(options);

// for (const ev of events) {
//   const hd = ev.getDate();
//   const date = hd.greg();
//   console.log(/* date.toLocaleDateString(), */ ev.render('he-x-NoNikud'), /* hd.toString() */);
// }
function MyComponent() {
  const [alot_hashachar, setAlot_hashachar] = useState(0);
  const [neitz_hachama, setNeitz_hachama] = useState(0);
  const [sof_zman_shma , setSof_zman_shma ] = useState(0);
  const [sof_zman_tfilla , setSof_zman_tfilla ] = useState(0);
  const [chatzot , setChatzot ] = useState(0);
  const [chatzot_night , setChatzot_night ] = useState(0);
  const [mincha_gedola , setMincha_gedola ] = useState(0);
  const[mincha_ketana,setMincha_ketana]=useState(0);
  const [plag_hamincha , setPlag_hamincha ] = useState(0);
  const [shkiah , setShkiah ] = useState(0);
  const [tzeit  , setTzeit  ] = useState(0);
  const [omer, setOmer] = useState(0);
  const today = new Hebcal();
  


  

 

  useEffect(() => {
    const today = new Hebcal();
    console.log(today)
   
    const Beit_Shemesh = today.setCity('Jerusalem');
    console.log(Beit_Shemesh);
    
    console.log(today.find('today')[0].toString('h'))
    console.log(today.find('today')[0].hour())
    console.log(`${today.find('today')[0].sunrise().getHours()}:${today.find('today')[0].sunrise().getMinutes()}`)
    // const sunsetTime = jerusalem.sunset().toLocaleTimeString();
    // setSunriseTime(sunriseTime);

    console.log(new Date().toLocaleTimeString());
    console.log("this",`${today.find('today')[0].getZemanim().neitz_hachama.getHours()}:${today.find('today')[0].getZemanim().neitz_hachama.getMinutes()}`, "lkjhgfdssssssssssssssssssss");
    const tzet = today.find('today')[0].getZemanim().tzeit

   
    console.log("c",(new Date()).getTime())
    console.log("c",today.find('today')[0].sunset().getTime())
    console.log("c",(new Date()).getTime() > today.find('today')[0].sunset().getTime())
    const currentDate = new Date();
    const targetDate = new Date('May 25, 2023 12:00:00');
    if(currentDate<targetDate){
    if ((new Date()).getTime() > today.find('today')[0].sunset().getTime()) {
      setOmer(today.find('today')[0].omer()+1) 
    }
    else
    setOmer(today.find('today')[0].omer())
  }else{
setOmer(0);



  }
  const zmanim = {
    alot_hashachar: `${today.find('today')[0].getZemanim().alot_hashachar.getHours()}:${today.find('today')[0].getZemanim().alot_hashachar.getMinutes()}`,
    neitz_hachama: `${today.find('today')[0].getZemanim().neitz_hachama.getHours()}:${today.find('today')[0].getZemanim().neitz_hachama.getMinutes()}`,
    chatzot_night: `${today.find('today')[0].getZemanim().chatzot_night.getHours()}:${today.find('today')[0].getZemanim().chatzot_night.getMinutes()}`,
    chatzot: `${today.find('today')[0].getZemanim().chatzot.getHours()}:${today.find('today')[0].getZemanim().chatzot.getMinutes()}`,
    tzeit: `${today.find('today')[0].getZemanim().tzeit.getHours()}:${today.find('today')[0].getZemanim().tzeit.getMinutes()}`,
    shkiah: `${today.find('today')[0].getZemanim().shkiah.getHours()}:${today.find('today')[0].getZemanim().shkiah.getMinutes()}`,
    plag_hamincha: `${today.find('today')[0].getZemanim().plag_hamincha.getHours()}:${today.find('today')[0].getZemanim().plag_hamincha.getMinutes()}`,
    mincha_ketana: `${today.find('today')[0].getZemanim().mincha_ketana.getHours()}:${today.find('today')[0].getZemanim().mincha_ketana.getMinutes()}`,
    mincha_gedola: `${today.find('today')[0].getZemanim().mincha_gedola.getHours()}:${today.find('today')[0].getZemanim().mincha_gedola.getMinutes()}`,
    sof_zman_tfilla: `${today.find('today')[0].getZemanim().sof_zman_tfilla.getHours()}:${today.find('today')[0].getZemanim().sof_zman_tfilla.getMinutes()}`,
    sof_zman_shma: `${today.find('today')[0].getZemanim().sof_zman_shma.getHours()}:${today.find('today')[0].getZemanim().sof_zman_shma.getMinutes()}`
  };
setAlot_hashachar(zmanim.alot_hashachar);
setNeitz_hachama(zmanim.neitz_hachama);
setSof_zman_shma(zmanim.sof_zman_shma);
setSof_zman_tfilla(zmanim.sof_zman_tfilla);
setChatzot(zmanim.chatzot);
setChatzot_night(zmanim.chatzot_night);
setMincha_gedola(zmanim.mincha_gedola);
setMincha_ketana(zmanim.mincha_ketana);
setPlag_hamincha(zmanim.plag_hamincha);
setShkiah(zmanim.shkiah);
setTzeit(zmanim.tzeit);
}

  , []);
  


  return (
   
    
    
    
    

   
    
      
<Container >

  
  <Col style={{textAlign:"center"}} xs={12} ><h1 >זמני היום</h1></Col>
    
    <Row>
<Col>
<Col xs={12}><h6> עלות השחר 0{alot_hashachar}</h6></Col><br/>
  <Col xs={12}><h6>נץ החמה    0{neitz_hachama}</h6></Col><br/>
  <Col xs={12}><h6 >סוף זמן ק"ש {sof_zman_shma}</h6></Col><br/>
  <Col xs={12}><h6>סוף זמן תפילה{sof_zman_tfilla}</h6></Col><br/>
  <Col xs={12}><h6>חצות היום והלילה{chatzot}</h6></Col><br/>
</Col>
<Col>
  <Col xs={12}><h6>מנחה גדולה:    {mincha_gedola}</h6></Col><br/>
  <Col xs={12}> <h6>מנחה קטנה:    {mincha_ketana}</h6></Col><br/>
  <Col xs={12}><h6>זמן פלג:    {plag_hamincha}</h6></Col><br/>
  <Col xs={12}><h6> שקיעה:    {shkiah}</h6></Col><br/>
  <Col xs={12}><h6>צאת הכוכבים:    {tzeit}</h6></Col><br/>
</Col>
</Row>
<Col style={{textAlign:"center"}} xs={12}>{omer !== 0 && (
      <h7>ספירת העומר: {"היום" + " " + omer + " " + "יום" + " " + "שהם" + " " + Math.floor(omer / 7) + " " + "שבועות" + " " + "ו" + " " + omer % 7 + " " + "ימים"}</h7>
    )}</Col>
</Container>
  
);
}

export default MyComponent;
