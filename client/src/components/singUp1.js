import React, { useState, useNa } from 'react'
import { useNavigate } from 'react-router-dom';
function SingUp1({ }) {
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [adrss,setAdrss]=useState("");
  const[idnum,setIdnum]=useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    let body = JSON.stringify({
      "firstname": firstname,
      "lastName": lastName,
      "adrss": adrss,
      "idnum": idnum,
      "password": password,
      "email": mail
    });

    let requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: body,
    };

    fetch("http://localhost:5000/auth/signup", requestOptions)
      .then(response => response.json())
      .then(result => {

      })


      .catch(error => alert('error', error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        שם פרטי:
        <input type="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </label>
      <label>
        שם משפחה:
        <input type="lastname" value={lastName} onChange={(e) => setLastname(e.target.value)} />
      </label>
      <label>
         כתובת מגורים:
        <input type="adrss" value={adrss} onChange={(e) => setAdrss(e.target.value)} />
      </label>
      <label>
         ת"ז:
        <input type="idnum" value={idnum} onChange={(e) => setIdnum(e.target.value)} />
      </label>
      <label>
        סיסמא:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
      </label>

      <button type="submit">הרשמה</button>
    </form>
  )
}

export default SingUp1