import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const defaultTheme = createTheme();

export default function To_bring_in_joys() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
   
    let body = JSON.stringify({
      family: data.get('family'),
      type: data.get('type'),
      cilde: data.get('cilde'),
    });

   
    let requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: body,
    };

    fetch("http://localhost:5000/auth/to_bring_in_joys", requestOptions)
      .then(response => { return response.json() })
      .then(result => {
        console.log(result);
        if (result.msg) {
          alert(result.msg)
          return;
        }



        alert(" העידכון בוצעה בהצלחה")
      
        
      })


      .catch(error => alert(error));


  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           עידכון שמחות
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
             
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="family"
                  label="שם משפחה"
                  name="family"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label=" סוג שמחה"
                  name="type"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cilde"
                  label="סוג ההולדה"
                  id="cilde"
                  autoComplete="new-password"
                />
              </Grid>
           
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              עדכן
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
