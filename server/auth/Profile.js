const express = require("express");
const jwt = require("jsonwebtoken");

const connection = require("../mySql");

const router = express.Router();

router.get("/Profile", (req, res) => {
    // const token = req.headers.authorization.split(" ")[1];
    // const { email, id } = jwt.verify(token, "your_secret_key")
    connection.query("SELECT * FROM users_new ", (err, results) => {
        console.log(results);
       res.status(200).json(results)
    })
})
module.exports = router;