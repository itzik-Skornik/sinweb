const express = require("express");
const connection = require("../mySql");
const router = express.Router();

router.post("/MyMassge",(req,res)=>{
    const{id,Messages}=req.body;
    console.log(id,Messages,"222222222222222");
    connection.query("UPDATE test.messages SET myMassge = ? WHERE id = ?", [Messages, id], (err, results, fields) => {
        console.log(results,"5555555555555");
    })
    res.status(200).json({ success: true, msg: "ההודעה נשלחה" });
})




module.exports = router;