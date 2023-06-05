const express = require("express");
const connection = require("../mySql");
const router = express.Router();
router.get("/app/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id, "666666666");
    connection.query("SELECT * FROM test.messages WHERE ? = userid", [id], (err, results, fields) => {
        console.log(results, "8585858585");
        const filteredResults = results.filter(chat => chat.myMassge);
        console.log(filteredResults);
        if (filteredResults[0]) {
            res.status(200).json({ success: true, body: filteredResults });
        } else {
            res.status(400).json({ msg: "אין הודעות מהגבאי" });
        }
    })

})






module.exports = router;