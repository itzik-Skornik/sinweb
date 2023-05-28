import React from 'react'
import Grid from '@mui/material/Grid';

import { Button } from '@mui/material';

function Updates() {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Button text="כפתור 1" onClick={() => console.log('Clicked Button 1')} />
            </Grid>
            <Grid item>
                <Button text="כפתור 2" onClick={() => console.log('Clicked Button 2')} />
            </Grid>
        </Grid>
    )
}

export default Updates