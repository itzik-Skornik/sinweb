import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function AddUpdate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let body = JSON.stringify({
      text: data.get('updateText'),
    });

    let requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: body,
    };

    fetch("http://localhost:5000/auth/addUpdate", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.msg) {
          alert(result.msg);
          return;
        }
        alert("ההודעה נשלחה בהצלחה");
      })
      .catch(error => alert('error', error));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}
    >
      <Typography variant="h5" component="h2" align="center">
        הוספת עדכון חדש
      </Typography>
      <TextField
        required
        fullWidth
        id="updateText"
        label="תוכן העדכון"
        name="updateText"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        שלח עדכון
      </Button>
    </Box>
  );
}
