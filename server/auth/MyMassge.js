const express = require("express");
const connection = require("../mySql");
const router = express.Router();

router.post("/MyMassge",(req,res)=>{
    const{id,Messages}=req.body;
    connection.query("")
})




module.exports = router;