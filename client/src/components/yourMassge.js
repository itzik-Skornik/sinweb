import React, { useEffect, useState,useContext } from 'react'
import { Container, Paper, Typography } from '@mui/material';
import { userContext } from '../App';

function YourMassge({ id }) {
    const {  bage, setBage } = useContext(userContext)
    console.log(id);
    const [getMassge, setGetMassge] = useState([])
    useEffect(() => {


        fetch(`http://localhost:5000/auth/yourMassge/${id}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.msg) {
                    alert(result.msg)
                    return;
                }
                setGetMassge(result.body);
             setBage(0);
            })
            .catch(error => alert('error', error));
    }, []);
    return (
        <Container maxWidth="sm">
        {getMassge.map((message, index) => (
          <Paper
            key={index}
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              שאלה:
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '10px' }}>
              {message.frenMassge}
            </Typography>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              תשובה:
            </Typography>
            <Typography variant="body1">{message.myMassge}</Typography>
          </Paper>
        ))}
      </Container>
    )
}

export default YourMassge