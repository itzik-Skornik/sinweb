import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
function Login1({ handleLogin }) {
    const [password, setPassword] = useState("");
    // const jwt= require("jsonwebtoken");
    const [mail, setMail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();


        let body = JSON.stringify({
            "password": password,
            "email": mail
        });

        let requestOptions = {
            method: 'POST',
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`,"Content-Type": "application/json" },
            body: body,
        };

        fetch("http://localhost:5000/auth/login", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success === true) {
                    localStorage.setItem("serverData", JSON.stringify(data.body));
                    localStorage.setItem("token", data.token);
                    handleLogin(true);
                    alert("הכניסה בוצעה בהצלחה")
                    navigate("/")

                } else {
                    alert("נתונים שגויים");
                }
            })
            .catch(error => alert('שגיעה', error));
    }


    return (
        <div style={{textAlign:"center",marginTop:"150px" ,border:"1px solid black" ,height:"350px",width:"350px" ,marginRight:"500px",backgroundColor:"gray"}}>
        <form onSubmit={handleSubmit}>
<h2>כניסה למערכת</h2>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label><br/><br/>
            <label>
                Email:
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
            </label>
            <br/><br/><br/>
            <button type="submit">כניסה</button><br/><br/><br/>
            <a href="/singup1">להרשמה</a>
        </form>
        </div>)
}

export default Login1