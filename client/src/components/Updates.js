// import React from 'react'
// import Grid from '@mui/material/Grid';

// import { Button } from '@mui/material';
// import { Navigate, Outlet, useNavigate } from 'react-router-dom';

// function Updates() {
//     const navigate = useNavigate();

//     return (
//         <div>
//             <Grid container justifyContent="center" spacing={2}>
//                 <Grid item>
//                     <Button variant="contained" color="primary" onClick={()=>navigate("MazelTov")}>שמחות </Button>
//                 </Grid>
//                 <Grid item>
//                     <Button variant="contained" color="secondary">עידכונים </Button>
//                 </Grid>
//             </Grid>
//             <Outlet />
//         </div>
//     )
// }

// export default Updates

import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate, Outlet } from 'react-router-dom';
import './Updates.css';

function Updates() {
    const navigate = useNavigate();

    return (
        <div className="updates-container">
            <Paper elevation={3} className="updates-paper">
                <Box className="updates-header">
                    <Typography variant="h3" component="h2" className="updates-title">
                        חדשות ושמחות בקהילה
                    </Typography>
                    <Typography variant="body1" className="updates-subtitle">
                        כאן תוכלו למצוא את כל המידע המעודכן על השמחות והאירועים בקהילה שלנו.
                        אנו מזמינים אתכם להצטרף לחגיגות ולברך את החברים שלנו בשמחותיהם.
                    </Typography>
                </Box>
                <Grid container justifyContent="center" spacing={3} className="updates-buttons">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate("MazelTov")}
                            className="updates-button"
                        >
                            שמחות
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("UpdatesDisplay")}
                            className="updates-button"
                        >
                            עדכונים
                        </Button>
                    </Grid>
                </Grid>
                <Outlet />
            </Paper>
        </div>
    );
}

export default Updates;

