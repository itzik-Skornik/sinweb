
import { Card, CardContent, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
function MazelTov() {
    const [color, setColor] = useState("#ffa366")
    const arr = ["#ff6666", " #99ff66", "#ff66d9", "#ffff66", "#ffa366"]
    let i = 0;
    const [josyArr, setJoseArr] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(arr[i]);
            i = (i + 1) % arr.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {


        fetch(`http://localhost:5000/auth/MazelTov`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.msg) {
                    alert(result.msg)
                    return;
                }
                setJoseArr(result.body);

            })
            .catch(error => alert('error', error));
    }, []);



    return (
        <>
            {josyArr.length > 0 &&
                <div style={{ border: `10px solid ${color}` }}>
                    {josyArr.map((item, index) => (
                        <Card key={index} sx={{ marginTop: 2, margin: 3, padding: 3, textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    מזל טוב למשפחת {item.family}
                                </Typography>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="body1">
                                        {item.type === "ברמצווה" ? (
                                            <>
                                                על הכנסם בנם בעול תורה ומצוות שתזכו להמשיך לגדלו לתורה חופה ומעשים טובים ולרוות נחת ממנו ומכל יוצאי חלציכם
                                            </>
                                        ) : item.type === "הולדה" ? (
                                            <>
                                                {item.cilde === "בן" ? (
                                                    <>להולדת הבן יהי רצון שתזכו לגדלו לתורה ולחופה ומעשים טובים ותרוו נחת ממנו ומכל יוצאי חליצכם</>
                                                ) : (
                                                    <>להולדת הבת שתזכו לגדלה לתורה ולחפה ומעשים טובים ותרוו נחת ממנה ומכל יוצאי חליצכם</>
                                                )}
                                            </>
                                        ) : item.type === "אירוסין" ? (
                                            <>
                                                {item.cilde === "בן" ? (
                                                    <>לרגל אירוסי בנם שתזכו להכניסו לחופה ולמעשים טובים ולראות נחת מהזוג הטרי</>
                                                ) : (
                                                    <>לרגל אירוסי בתם בשעה טובה ומוצלחת שתזכו להכניסה לחופה ולמעשים טובים ולראות נחת מהזוג הטרי</>
                                                )}
                                            </>
                                        ) : item.type === "חתונה" ? (
                                            <>
                                                {item.cilde === "בן" ? (
                                                    <>לרגל הכנסם בנם לחופה שיזכו לבנות בית נאמן בישראל ולראות נחת מהזוג הטרי</>
                                                ) : (
                                                    <>לרגל הכנסם בתם בשעה טובה ומוצלחת לחופה שיזכו לבנות בית נאמן בישראל ולראות נחת מהזוג הטרי</>
                                                )}
                                            </>
                                        ): <></>}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                בברכת מזל טוב מהגבאים וכל חברי הקהילה
                            </Typography>
                        </Card>
                    ))}
                </div>
            }
        </>

    )
}

export default MazelTov