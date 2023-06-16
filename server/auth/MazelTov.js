const express = require("express");
const connection = require("../mySql");
const router = express.Router();

router.get("/MazelTov", (req, res) => {
    
    connection.query("SELECT * FROM test.joys", (err, results, fields) => {
        console.log(err);
        console.log(results, "333222111");
        const filteredResults = results.filter(chat => {
            const messageDate = new Date(chat.date);
            const today = new Date();
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
            return messageDate >= oneWeekAgo && messageDate <= today;
        });
        console.log(filteredResults, "123456789");
        if (filteredResults[0]) {
            res.status(200).json({ success: true, body: filteredResults });
        } else {
            res.status(400).json({ msg: "אין שמחות " });
        }
    })

})
module.exports = router;