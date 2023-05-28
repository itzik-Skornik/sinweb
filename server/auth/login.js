const express = require("express");
const connection = require("../mySql");
// const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")
const router = express.Router();

router.post("/login", (req, res) => {
    const { password, email } = req.body;
    console.log(password, email, "gsfdggdgf");
    // let log = false;

    if (password && email) {
        connection.query("SELECT * FROM users_new WHERE email = ?", [email], (err, results) => {
            console.log(results, "dkhsdfj");
            if ((results.length > 0 && results[0].password === password)) {
                const token = jwt.sign({ email: email, id: results[0].id }, "your_secret_key", { expiresIn: "1H" });
                res.status(200).json({ success: true, body: results[0], token: token });
            } else {

                res.status(400).json({ success: false,body: results[0] ,msg: " הנתונים שגויים" });
            }
        });
    } else {
        res.status(400).json({ success: false,msg: "חסר נתונים" });
    }
});

module.exports = router;
