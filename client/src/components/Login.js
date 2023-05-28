import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const theme = createTheme();

export default function SignIn({ handleLogin }) {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'))
  
    let body = JSON.stringify({
      email:data.get('email'),
      password: data.get('password'),
    });

    let requestOptions = {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
      body: body,
    };

    fetch("http://localhost:5000/auth/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.msg) {
          alert(data.msg)
          return;
        }
        localStorage.setItem("serverData", JSON.stringify(data.body));
        localStorage.setItem("token", data.token);
        console.log(data);
        handleLogin(true,data.body, email);
        alert("הכניסה בוצעה בהצלחה")
        navigate("/profile ")

      })


      .catch(error => alert(error));

  }




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
            כניסה
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="כתובת מייל"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמא"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              לכניסה
              {/* <Spinner animation="border" variant="dark" /> */}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/newCode" variant="body2">
                  שכחתה את הסיסמא?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/singUp" variant="body2">
                  "אתה לא רשום? להרשמה"
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}