import React, { useEffect, useState } from 'react'
import FilterableCotactTable from './FilterableCotactTable';
import Messages from './Messages';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

function Profile({ user }) {
  const [countacts, setCountacts] = useState([]);
  const [key, setKey] = useState(0);
  console.log(user);

  // get all contacts
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:5000/auth/Profile`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.body);
        setCountacts(result.body);
      })
      .catch(error => alert('error', error));
  }, []);

  const renderComponent = () => {
    switch (key) {
      case 1:
        return <FilterableCotactTable countacts={countacts} />
      case 2:
        return <Messages />;
      case 3:
        return;
      default:
        return null;
    }
  };

  // console.log(JSON.parse(storedData));
  return (
    <div style={{ backgroundColor: 'lightblue', display: 'flex' }}>
      <div style={{ width: '200px' }}>
        <h3 style={{ textAlign: 'center' }}>שלום לך {user.firstName}</h3>
        <List>
          <ListItem button onClick={() => setKey(1)}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="אנשי קשר" />
          </ListItem>
          <ListItem button onClick={() => setKey(2)}>
            <ListItemIcon>
              <LocalPostOfficeIcon />
            </ListItemIcon>
            <ListItemText primary=" הודעה לגבאים" />
          </ListItem>
        </List>
      </div>
      <div style={{ flex: 1 }}>
        {renderComponent()}
      </div>
    </div>
  )
}
export default Profile