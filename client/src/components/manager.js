import React, { useState } from 'react'
import UpdateIcon from '@mui/icons-material/Update';
import Community_list from './Community_list';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import MessageIcon from '@mui/icons-material/Message';
import MyMassge from './myMassge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import MazelTov from './MazelTov';
import To_bring_in_joys from './to_bring_in_joys';
import AddUpdate from './AddUpdate';
function Manager({ user }) {
  const [key, setKey] = useState(0);

  const handleClick = (number) => {
    setKey(number);
  };

  const renderComponent = () => {
    switch (key) {
      case 1:
        return <Community_list user={user} />
      case 2:
        return <MyMassge />;
      case 3:
        return  <To_bring_in_joys />  
        case 4:
        return  <AddUpdate />    
        default:
        return null;
    }
  };
  return (
    <div style={{ backgroundColor: 'lightblue', display: 'flex' }}>
      <div style={{ width: '200px' }}>
        <h2 style={{backgroundColor: 'red', textAlign: 'center'}}>מנהל</h2>
        {/* <h3 style={{ textAlign: 'center' }}>שלום לך {user.firstName}</h3> */}
        <List>
          <ListItem button onClick={() => setKey(1)}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="טבלת הקהילה" />
          </ListItem>
          <ListItem button onClick={() => setKey(2)}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary=" הודעות לחברים" />
          </ListItem>
          <a style={{ color: "inherit", textDecoration: "none" }} href='https://calendar.google.com/'>         <ListItem>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
              <ListItemText primary=" יומן ניהול" />
          </ListItem>
          </a>
          <ListItem button onClick={() => setKey(3)}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary=" עידכוני שמחות " />
          </ListItem>
          <ListItem button onClick={() => setKey(4)}>
  <ListItemIcon>
    <UpdateIcon />
  </ListItemIcon>
  <ListItemText primary=" עידכונים כלליים " />
</ListItem>
        </List>
      </div>
      <div style={{ flex: 1 }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default Manager