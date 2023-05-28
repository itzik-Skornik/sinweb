

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
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Contact() {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = 'mailto:ys7685611@gmail.com';
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            <CallIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            יצירת קשר
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="h1" variant="h5">
              שם גבאי: יצחק יעקב סקורניק
            </Typography>
            <Typography component="h1" variant="h5">
              מספר פלאפון : <a href="tel:+972527685611">0527685611</a>
            </Typography>
            <Typography component="h1" variant="h5">
              כתובת אימייל : <a href="mailto:ys7685611@gmail.com" onClick={handleEmailClick}>ys7685611@gmail.com</a>
            </Typography>

            <br />
            <br />
            <br />


            <Typography component="h1" variant="h5">
              שם גבאי: יהודה סקורניק
            </Typography>
            <Typography component="h1" variant="h5">
              מספר פלאפון : <a href="tel:+972583260453">0583260453</a>
            </Typography>
            <Typography component="h1" variant="h5">
              כתובת אימייל: <a href="mailto:ys7685611@gmail.com" onClick={handleEmailClick}>ys7685611@gmail.com</a>
            </Typography>

            <br />
            <br />
            <br />

          

          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}