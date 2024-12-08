import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'; 

function UpdatesDisplay() {
  const [updates, setUpdates] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#a1cfff", "#ffcccb", "#d4edda", "#fff3cd", "#f0e68c"];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/auth/updates')
      .then((response) => response.json())
      .then((result) => {
        if (result.msg) {
          alert(result.msg);
          return;
        }

        const currentDate = dayjs();
        const filteredUpdates = result.body.filter(update => {
          const updateDate = dayjs(update.date); 
          const diffInDays = currentDate.diff(updateDate, 'day'); 
          return diffInDays <= 3; 
        });

        setUpdates(filteredUpdates);
       
      })
      .catch((error) => alert('error', error));
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      {updates.map((update, index) => (
        <Card
          key={index}
          sx={{
            background: `linear-gradient(135deg, ${colors[colorIndex]} 0%, #ffffff 100%)`,
            marginBottom: 2,
            padding: 2,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" component="h2" sx={{ textAlign: 'center', marginBottom: 2 }}>
              עדכון חדש
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

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('UpdatesHistory')}
        sx={{ marginTop: 2 }}
      >
        היסטוריית עדכונים
      </Button>
    </Box>
  );
}

export default UpdatesDisplay;
