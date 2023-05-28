import React from 'react'
import Grid from '@mui/material/Grid';

import { Button } from '@mui/material';

function Updates() {
    return (
        <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <Button variant="contained" color="primary">כפתור 1</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">כפתור 2</Button>
      </Grid>
    </Grid>
    )
}

export default Updates