import React, { useEffect, useState } from 'react'
import Contacts from './Contacts';
import Messages from './Messages';

function Profile({ isLoggedIn, logIn, logOut }) {

  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/auth/Profile", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(result => {
        setData(result.body);
        console.log(result.body);
        console.log(data);
        
      })
      .catch(error => alert('error', error));
  }, []);
  const [key, setKey] = useState(0);

  const renderComponent = () => {
    switch (key) {
      case 1:
        return  <Contacts data={data} />;
      case 2:
        return <Messages />;
      case 3:
        return ;
      default:
        return null;
    }
  };
  // console.log(JSON.parse(storedData));
  return (
    <div>
    <button onClick={() => setKey(1)}> אנשי קשר</button>
    <button onClick={() => setKey(2)}>קומפוננטה 2</button>
    <button onClick={() => setKey(3)}>קומפוננטה 3</button>

    {renderComponent()}
  </div>
 

 

   )

}
export default Profile