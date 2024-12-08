// import React from 'react'

// function Yomcol() {
//   return (
//     <div
//       style={{
        
        
//         padding: '20px',
//         textAlign: 'center',
//         marginTop: '150px',
//       }}
//     >
//       <h5>שחרית: 07:45</h5>
//       <h5>מעריב א: 21:45</h5>
     
      
//     </div>
//   )
// }

// export default Yomcol

import React from 'react';
import './Yomcol.css';
import { Typography, Box, Paper } from '@mui/material';

function Yomcol() {
  return (
    <div className="yomcol-container">
      <Paper elevation={3} className="yomcol-paper">
        <Typography variant="h4" component="h2" className="yomcol-title">
          זמני תפילות חול
        </Typography>
        <Box className="yomcol-times">
          <Typography variant="h6" className="yomcol-time">
            שחרית א: 07:45
          </Typography>
          <Typography variant="h6" className="yomcol-time">
            שחרית ב: 08:10
          </Typography>
          <Typography variant="h6" className="yomcol-time">
            מנחה: 20 דקות לפני שקיעה
          </Typography>
          <Typography variant="h6" className="yomcol-time">
            שיעור דף היומי: 20:00
          </Typography>
          <Typography variant="h6" className="yomcol-time">
            מעריב א: 20:45
          </Typography>
          <Typography variant="h6" className="yomcol-time">
            מעריב ב: 22:30
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default Yomcol;
