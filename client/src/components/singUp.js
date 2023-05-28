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
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let body = JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
      LastName: data.get('LastName'),
      firstName: data.get('firstName'),
      address: data.get('address'),
      number: data.get('number'),
      number1: data.get('number1'),
      number2: data.get('number2'),
    });

    let requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: body,
    };

    fetch("http://localhost:5000/auth/signup", requestOptions)
      .then(response => { return response.json() })
      .then(result => {
        console.log(result);
        if (result.msg) {
          alert(result.msg)
          return;
        }



        alert("נרשמתה בהצלחה")
        navigate("/")
        
      })


      .catch(error => alert(error));


  };

  return (
    <ThemeProvider theme={theme}>
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
            הרשמה
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="שם פרטי"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="LastName"
                  label="שם משפחה"
                  name="LastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="כתובת מייל"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="כתובת דירה/בנין/דירה"
                  name="address"
                  autoComplete="adress"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="סיסמא"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="number"
                  label="טלפון"
                  type="string"
                  id="number"
                  autoComplete="new-number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  name="number1"
                  label=" מספר נוסף"
                  type="string"
                  id="number1"
                  autoComplete="new-number"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField

                  fullWidth
                  name="number2"
                  label=" טלפון בית "
                  type="string"
                  id="number2"
                  autoComplete="new-number"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="אני רוצה לקבל עידכונים במייל על עידכונים בקהילה."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הרשמה
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="login" variant="body2">
                  יש לך כבר חשבון? כניסה
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}