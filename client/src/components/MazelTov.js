import { Card, CardContent, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

function MazelTov() {
  const [colorIndex, setColorIndex] = useState(0);
  const arr = ["#ff6666", "#99ff66", "#ff66d9", "#ffff66", "#ffa366"];
  const [josyArr, setJoseArr] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/auth/MazelTov`)
      .then((response) => response.json())
      .then((result) => {
        if (result.msg) {
          alert(result.msg);
          return;
        }
        setJoseArr(result.body);
      })
      .catch((error) => alert('error', error));
  }, []);

  return (
    <>
      {josyArr.length > 0 && (
        <div style={{ position: 'relative', padding: '20px' }}>
          {josyArr.map((item, index) => (
            <Card
              key={index}
              sx={{
                marginTop: '40px', // הגדלת הרווח העליון
                margin: 3,
                padding: 3,
                textAlign: 'center',
                background: `linear-gradient(145deg, ${arr[colorIndex]} 0%, #ffffff 100%)`,
                borderRadius: '15px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px', // הרחקת הטקסט מהכרטיס
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: arr[colorIndex],
                  fontSize: '20px', // הקטנת גודל הטקסט
                  fontWeight: 'bold',
                  backgroundColor: '#fff',
                  padding: '0 15px', // מרווח קצת גדול יותר
                  borderRadius: '15px',
                  letterSpacing: '3px', // ריווח אותיות מעט קטן יותר
                }}
              >
                מזל טוב
              </div>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ marginBottom: '20px' }}>
                  מזל טוב למשפחת {item.family}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    {item.type === "ברמצווה" ? (
                      <>
                        על הכנסם בנם בעול תורה ומצוות שתזכו להמשיך לגדלו לתורה חופה ומעשים טובים ולרוות נחת ממנו ומכל יוצאי חלציכם
                      </>
                    ) : item.type === "הולדה" ? (
                      <>
                        {item.cilde === "בן" ? (
                          <>להולדת הבן יהי רצון שתזכו לגדלו לתורה ולחופה ומעשים טובים ותרוו נחת ממנו ומכל יוצאי חלציכם</>
                        ) : (
                          <>להולדת הבת שתזכו לגדלה לתורה לחופה ומעשים טובים ותרוו נחת ממנה ומכל יוצאי חלציכם</>
                        )}
                      </>
                    ) : item.type === "אירוסין" ? (
                      <>
                        {item.cilde === "בן" ? (
                          <>לרגל אירוסי בנם שתזכו להכניסו לחופה ולמעשים טובים ולראות נחת מהזוג הטרי</>
                        ) : (
                          <>לרגל אירוסי בתם שתזכו להכניסה לחופה ולמעשים טובים ולראות נחת מהזוג הטרי</>
                        )}
                      </>
                    ) : item.type === "חתונה" ? (
                      <>
                        {item.cilde === "בן" ? (
                          <>לרגל הכנסם בנם לחופה שתזכו לבנות בית נאמן בישראל ולראות נחת מהזוג הטרי</>
                        ) : (
                          <>לרגל הכנסם בתם לחופה שתזכו לבנות בית נאמן בישראל ולראות נחת מהזוג הטרי</>
                        )}
                      </>
                    ) : null}
                  </Typography>
                </Box>
              </CardContent>
              <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
                בברכת מזל טוב מהגבאים וכל חברי הקהילה
              </Typography>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default MazelTov;
