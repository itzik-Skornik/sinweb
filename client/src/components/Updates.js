import React from 'react'
import Grid from '@mui/material/Grid';

import { Button } from '@mui/material';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function Updates() {
    const navigate = useNavigate();

    return (
        <div>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={()=>navigate("MazelTov")}>שמחות </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary">עידכונים </Button>
                </Grid>
            </Grid>
            <Outlet />
        </div>
    )
}

export default Updates