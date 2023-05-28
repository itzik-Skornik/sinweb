import { useState } from "react";
import StickyFooter from "./newCode";

const nodemailer = require("nodemailer");


const email = (poprs)=>{
    const [random, setRandom] = useState();
    function generateRandomNumber() {
        const min = 10000000; // מספר התחלתי
        const max = 99999999; // מספר סופי
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
      }
      setRandom(generateRandomNumber())
let transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'ys7685611@gmail.com',
        pass: 'rtspuxqcnyduiyou',
    },
});

const message = {
    from: 'בית תפילה <ys7685611@gmail.com>',
    to: porpos,
    subject: "סיסמא חדשה",
    html: "הסיסמא החדשה היא " + random
};

transporter.sendMail(message, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
})
}
export default email