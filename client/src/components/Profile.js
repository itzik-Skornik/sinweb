import React, { useEffect, useState, useContext } from 'react'
import FilterableCotactTable from './FilterableCotactTable';
import Messages from './Messages';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import MessageIcon from '@mui/icons-material/Message';
import YourMassge from './yourMassge';
import { userContext } from '../App';
import axios from 'axios';

function Profile() {
  
  const { user, bage, setBage,ProfileKey,setProfileKey } = useContext(userContext)

  const [countacts, setCountacts] = useState([]);

  console.log(user);

  // get all contacts
  useEffect(() => {
    const token = localStorage.getItem("token");
  
    axios.get('http://localhost:5000/auth/Profile', {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then(response => {
        setCountacts(response.data);
      })
      .catch(error => {
        console.error(error);
        alert('Error');
      });
  }, []);
  

  const renderComponent = () => {
    switch (ProfileKey) {
      case 1:
        return <FilterableCotactTable countacts={countacts} />
      case 2:
        return <Messages />;
      case 3:
        return <YourMassge id={user.id} />;
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
          <ListItem button onClick={() => setProfileKey(1)}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="אנשי קשר" />
          </ListItem>
          <ListItem button onClick={() => setProfileKey(2)}>
            <ListItemIcon>
              <LocalPostOfficeIcon />
            </ListItemIcon>
            <ListItemText primary=" הודעה לגבאים" />
          </ListItem>
          <ListItem button onClick={() => setProfileKey(3)}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary=" הודעה מהגבאים" />
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