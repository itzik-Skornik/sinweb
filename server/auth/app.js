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
        let count = 0;
        if (filteredResults[0]) {
            for (let i = 0; i < filteredResults.length; i++) {
                if(filteredResults[i].is_read==0){
                    count++;
                }
             

            }
            res.status(200).json({ success: true, body: filteredResults,count});
        } else {
            res.status(400).json({ msg: "אין הודעות מהגבאי" });
        }
    })

})






module.exports = router;