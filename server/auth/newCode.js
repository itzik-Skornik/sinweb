const express = require("express");
const connection = require("../mySql");
const router = express.Router();
const nodemailer = require("nodemailer");

function generateRandomNumber() {
    const min = 10000000; // מספר התחלתי
    const max = 99999999; // מספר סופי
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

router.post("/newCode", (req, res) => {
    const { email } = req.body
    console.log(email);
    connection.query("SELECT * FROM users_new WHERE email = ?", [email], (err, results) => {
        console.log(results, '11111111');
        console.log(results.firstName, '22222');
        if (results.length > 0) {
            // TODO: send new password to email
            let random = generateRandomNumber()

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

            const message = {
                from: 'בית תפילה <ys7685611@gmail.com>',
                to: email,
                subject: "סיסמא חדשה",
                html:` <html>
                    <head>
                        <title> סיסמא חדשה</title>
                        <style>
                            body {
                                background - color: #f2f2f2;
                            font-family: Arial, sans-serif;
                    }

                            .container {
                                max - width: 400px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #ffffff;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                            h1 {
                                color: #333333;
                            text-align: center;
                    }

                            p {
                                color: #666666;
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
                            <h1>שלום לך ${results[0].firstName} ${results[0].LastName}</h1>
                            <p>הסיסמה החדשה שלך היא:</p>
                            <p class="highlight">${random} </p>
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

            connection.query(`UPDATE users_new SET password = ? WHERE email = ?`, [random, email], (err, results, fields) => {
                console.log(results, fields, "88888888888888888888888888");
            })
            res.status(200).json({ msg: "הסיסמה נשלחה למייל" })
        } else {
            res.status(404).json({ msg: "המייל לא נמצא" })
        }
    })
})

module.exports = router
