const express = require("express");
const jwt = require("jsonwebtoken");

const connection = require("../mySql");

const router = express.Router();

router.get("/Profile", (req, res) => {
    // const token = req.headers.authorization.split(" ")[1];
    // const { email, id } = jwt.verify(token, "your_secret_key")
    const { id } = req.body;
    connection.query("SELECT firstName ,LastName,number FROM users_new ", (err, results) => {
        console.log(results,"33333333333333333");
       res.status(200).json({ body: results})
    })
})
module.exports = router;