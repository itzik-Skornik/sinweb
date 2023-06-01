const express = require("express");
const connection = require("../mySql");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/Messages", (req, res) => {
    const { email, Messages } = req.body

    console.log(email, Messages, "svhhhhhhhhhhhj");
    if (email && Messages) {
        connection.query("SELECT * FROM users_new WHERE email = ?", [email], (err, results) => {
            console.log(results, "dkhsdfj");
            if ((results.length > 0 && results[0].email === email)) {

                let transporter = nodemailer.createTransport({
                    pool: true,
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASS,
                    },
                });


                connection.query("INSERT INTO `test`.`messages`(`userId`,`frenMassge`)VALUES(?,?)", [results[0].id, Messages], (err, results2) => {
                    if (err) return console.log(err);
                    console.log("results2: ", results2.insertId);
                    res.status(200).json({ success: true, msg: "ההודעה נשלחה" });
                    const message = {
                        from: 'בית תפילה <ys7685611@gmail.com>',
                        to: 'בית תפילה <ys7685611@gmail.com>',
                        subject: "הודעה מחבר",
                        html: `<html>
                        <head>
                            <title>סיסמא חדשה</title>
                            <style>
                                body {
                                    background-color: #f2f2f2;
                                    font-family: Arial, sans-serif;
                                }
                        
                                .container {
                                    max-width: 400px;
                                    margin: 0 auto;
                                    padding: 20px;
                                    background-color:#4dffff;
                                    border: 1px solid #ccc;
                                    border-radius: 5px;
                                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                                }
                        
                                h1 {
                                    color: #ff8000;
                                    text-align: center;
                                }
                        
                                h2 {
                                    color: 	 #ff8000;
                                    text-align: center;
                                    margin-bottom: 20px;
                                }
                        
                                .highlight {
                                    color: #ff0000;
                                    font-weight: bold;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h1> שם השולח: ${results[0].LastName}</h1>
                                <h1>  מספר הודעה ${results2.insertId}</h1>
                               <h2>  ההודעה שנשלחה: ${Messages}</h2>
                            </div>
                        </body>
                        </html>`

                    };
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(info);
                        }
                    })
                })
            } else {

                res.status(400).json({ success: false, body: results[0], msg: " הנתונים שגויים" });
            }
        });
    } else {
        res.status(400).json({ success: false, msg: "חסר נתונים" });
    }


})




module.exports = router;