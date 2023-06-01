import React, { useState } from 'react'
import Community_list from './Community_list';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import MessageIcon from '@mui/icons-material/Message';
import MyMassge from './myMassge';
function Manger({user}) {
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
        return  ;
      default:
        return null;
    }
  };
  return (
    <div style={{ backgroundColor: 'lightblue', display: 'flex' }}>
    <div style={{ width: '200px' }}>
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
      </List>
    </div>
    <div style={{ flex: 1 }}>
      {renderComponent()}
    </div>
  </div>
  );
}

export default Manger