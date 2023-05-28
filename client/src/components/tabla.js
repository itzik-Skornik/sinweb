import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Hebcal from 'hebcal';
import { addMinuite, reduceMinuite, getTimeFromDate } from "./zanime"

function Tabla() {
  console.log(1);

  const [sabat, setSabat] = useState([])
  const [alot_hashachar, setAlot_hashachar] = useState(0);
  const [neitz_hachama, setNeitz_hachama] = useState(0);
  const [sof_zman_shma, setSof_zman_shma] = useState(0);
  const [sof_zman_tfilla, setSof_zman_tfilla] = useState(0);
  const [chatzot, setChatzot] = useState(0);
  const [chatzot_night, setChatzot_night] = useState(0);
  const [mincha_gedola, setMincha_gedola] = useState(0);
  const [mincha_ketana, setMincha_ketana] = useState(0);
  const [plag_hamincha, setPlag_hamincha] = useState(0);
  const [shkiah, setShkiah] = useState(0);
  const [tzeit, setTzeit] = useState(0);
  const [omer, setOmer] = useState(0);
const [Maariv,setMaariv]=useState(0);
  const[morning,setMorning]=useState(0);
const [mincha,setMincha]=useState(0);
const [Fathers_and_Sons,setFathers_and_Sons]=useState(0);
const [Shabbat_came_out,setShabbat_came_out]=useState(0);
const [second,setSecond]=useState(0);
  const today = new Hebcal();
  const Beit_Shemesh = today.setCity('Jerusalem');
  console.log(`${today.find('today')[0].getZemanim().shkiah.getHours()}:${today.find('today')[0].getZemanim().shkiah.getMinutes()}`);
  // const morning = `${today.find('today')[0].getZemanim().sof_zman_shma.getHours()}${today.find('today')[0].getZemanim().sof_zman_shma.getMinutes().toString().padStart(2, '0')}`
  console.log(morning);

  const shkiah1 = `${today.find('today')[0].getZemanim().shkiah.getHours()}${today.find('today')[0].getZemanim().shkiah.getMinutes()}`


  const zmamin222 = today.find('today')[0].getZemanim()


  const shkiah2MS = new Date(zmamin222.shkiah).getTime()

  const fiftyMinutesBeforShkiah = new Date(shkiah2MS - (50 * 60 * 1000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });





  const shkiah1ToNumber = Number(shkiah1) * 60;
  console.log(shkiah1ToNumber);

  const morningToNumber = Number(morning) * 60;
  console.log(morningToNumber);
  console.log("this is shkiah1ToNumber");
  console.log(shkiah1ToNumber * 60);
  const Twenty_minutes = 20 * 60
  const thirty_seconds = 30 * 60
  const forty_five = 45 * 60
  const fifty_minutes = 50 * 60

  const number = (shkiah1ToNumber - Twenty_minutes % 3600) / 60
  const number1 = (shkiah1ToNumber + thirty_seconds % 3600) / 60
  const number2 = (morningToNumber - forty_five) / 60
  const number3 = (shkiah1ToNumber - fifty_minutes % 3600) / 60
  console.log(number3);
  // Divide the number by 100 to get the hours and minutes separately
  let hours = Math.floor(number / 100);
  let hours1 = Math.floor(number1 / 100);
  let hours2 = Math.floor(number2 / 100);
  let hours3 = Math.floor(number3 / 100);
  let minutes = number % 100;
  let minutes1 = number1 % 100;
  let minutes2 = number2 % 60;
  let minutes3 = number3 % 100;
  // Convert the hours and minutes to strings
  let hoursString = hours.toString().padStart(2, '0');
  let hoursString1 = hours1.toString().padStart(2, '0');
  let hoursString2 = hours2.toString().padStart(2, '0');
  let hoursString3 = hours3.toString().padStart(2, '0');
  let minutesString = minutes.toString().padStart(2, '0');
  let minutesString1 = minutes1.toString().padStart(2, '0');
  let minutesString2 = minutes2.toString().padStart(2, '0');
  let minutesString3 = minutes3.toString().padStart(2, '0');
  // Concatenate the strings with a colon between them
  let timeString = hoursString + ':' + minutesString;
  let timeString1 = hoursString1 + ':' + minutesString1;
  let timeString2 = hoursString2 + ':' + minutesString2;
  let timeString3 = hoursString3 + ':' + minutesString3;
  console.log(timeString);
  console.log(number, "kfdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
  useEffect(() => {
    const arr = [today.find('today')[0].getSedra('h')]
    setSabat(arr)

    const zmanim = {
      alot_hashachar: `${today.find('today')[0].getZemanim().alot_hashachar.getHours()}:${today.find('today')[0].getZemanim().alot_hashachar.getMinutes()}`,
      neitz_hachama: `${today.find('today')[0].getZemanim().neitz_hachama.getHours()}:${today.find('today')[0].getZemanim().neitz_hachama.getMinutes()}`,
      chatzot_night: `${today.find('today')[0].getZemanim().chatzot_night.getHours()}:${today.find('today')[0].getZemanim().chatzot_night.getMinutes()}`,
      chatzot: `${today.find('today')[0].getZemanim().chatzot.getHours()}:${today.find('today')[0].getZemanim().chatzot.getMinutes()}`,
      tzeit: `${today.find('today')[0].getZemanim().tzeit.getHours()}:${today.find('today')[0].getZemanim().tzeit.getMinutes()}`,
      shkiah: today.find('today')[0].getZemanim().shkiah,
      plag_hamincha: today.find('today')[0].getZemanim().plag_hamincha,
      mincha_ketana: `${today.find('today')[0].getZemanim().mincha_ketana.getHours()}:${today.find('today')[0].getZemanim().mincha_ketana.getMinutes()}`,
      mincha_gedola: today.find('today')[0].getZemanim().mincha_gedola,
      sof_zman_tfilla: `${today.find('today')[0].getZemanim().sof_zman_tfilla.getHours()}:${today.find('today')[0].getZemanim().sof_zman_tfilla.getMinutes()}`,
      sof_zman_shma:today.find('today')[0].getZemanim().sof_zman_shma,
    };

    setAlot_hashachar(zmanim.alot_hashachar);
    setNeitz_hachama(zmanim.neitz_hachama);
    setSof_zman_shma(zmanim.sof_zman_shma);
    setSof_zman_tfilla(zmanim.sof_zman_tfilla);
    setChatzot(zmanim.chatzot);
    setChatzot_night(zmanim.chatzot_night);
    setMincha_gedola(getTimeFromDate(reduceMinuite(zmanim.mincha_gedola, 0)));
    setMincha_ketana(getTimeFromDate(reduceMinuite(zmanim.shkiah, 20)));
    setPlag_hamincha(getTimeFromDate(reduceMinuite(zmanim.plag_hamincha, 0)));
    setShkiah(zmanim.shkiah);
    setTzeit(zmanim.tzeit);
    setMaariv( getTimeFromDate(addMinuite(zmanim.shkiah, 30)))
    setMorning( getTimeFromDate(reduceMinuite(zmanim.sof_zman_shma, 45)))
    setMincha(getTimeFromDate(reduceMinuite(zmanim.shkiah, 50)))
    setFathers_and_Sons(getTimeFromDate(reduceMinuite(zmanim.shkiah, 110)))
    setShabbat_came_out(getTimeFromDate(addMinuite(zmanim.shkiah, 35)))
    setSecond(getTimeFromDate(addMinuite(zmanim.shkiah, 55)))
  }, []);
  console.log(morning);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>פרשת השבוע:  {sabat.map(i => i + " ")}</h1><br /><br />
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>מנחה גדולה</th>
            <td>{mincha_gedola}</td>
          </tr>
          <tr>
            <th> פלג מנחה </th>
            <td>{plag_hamincha}</td>
          </tr>
          <tr>
            <th>מנחה קטנה </th>
            <td>{mincha_ketana}</td>
          </tr>
          <tr>
            <th>מעריב</th>
            <td>{Maariv}</td>
          </tr>
          <tr>
            <th>שחרית</th>
            <td>{morning}</td>
          </tr>
          <tr>
            <th>מנחה גדולה</th>
            <td>{mincha_gedola}</td>
          </tr>
          <tr>
            <th>אבות ובנים</th>
            <td>{Fathers_and_Sons}</td>
          </tr>
          <tr>
            <th>מנחה קטנה</th>
            <td>{mincha}</td>
          </tr>
          <tr>
            <th>מעריב א</th>
            <td>{Shabbat_came_out}</td>
          </tr>
          <tr>
            <th>מעריב ב</th>
            <td>{second}</td>
          </tr>
        </thead>
        <tbody>










        </tbody>
      </Table>
    </div>);


}


export default Tabla