import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import dayjs from 'dayjs';

function UpdatesHistory() {
  const [allUpdates, setAllUpdates] = useState([]);

  useEffect(() => {
    // שליפת כל העדכונים מהשרת
    fetch('http://localhost:5000/auth/updates')
      .then((response) => response.json())
      .then((result) => {
        if (result.msg) {
          alert(result.msg);
          return;
        }
        console.log("252354",result.body);
        setAllUpdates(result.body);
      })
      .catch((error) => alert('error', error));
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      {allUpdates.map((update, index) => (
        <Card
          key={index}
          sx={{
            background: '#f9f9f9',
            marginBottom: 2,
            padding: 2,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" component="h2" sx={{ textAlign: 'center', marginBottom: 2 }}>
              עדכון מהעבר
            </Typography>
            <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
              {update.text}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', marginTop: 1 }}>
              תאריך: {dayjs(update.date).format('DD/MM/YYYY')}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UpdatesHistory;
