import React, { useState, useEffect } from 'react';
import Hebcal from 'hebcal';
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();
const data =  new Hebcal.HDate(new Date()).toString('h') 
  return (
    <div style={{textAlign:"center"}}>
      <h3>{formattedTime}</h3>
      <h1>היום {data} </h1>
    </div>
  );
}

export default Clock;
