const express = require("express");
const connection = require("../mySql");
const router = express.Router();

router.get("/yourMassge/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id, "666666666");
    connection.query("SELECT * FROM test.messages WHERE ? = userid", [id], (err, results, fields) => {
        console.log(results, "5555555555555");
        const filteredResults = results.filter(chat => chat.myMassge && chat.is_read ==0);
        console.log(filteredResults);
        if (filteredResults[0]) {
            for (let i = 0; i < filteredResults.length; i++) {
                connection.query("UPDATE test.messages SET is_read = TRUE WHERE id = ?",[filteredResults[i].id],
                (err, res, fields) => {
console.log(res);
                }

            )}
            res.status(200).json({ success: true, body: filteredResults });
        } else {
            res.status(400).json({ msg: "אין הודעות מהגבאי" });
        }
    })

})






module.exports = router;