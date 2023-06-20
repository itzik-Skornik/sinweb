const express = require("express");
const connection = require("../mySql");
const router = express.Router();

router.post("/to_bring_in_joys", (req, res) => {
    
    const { family,type,cilde } = req.body;
    console.log(type,family,cilde,"אמא");
   

    connection.query("INSERT INTO joys (`type`, `family`, `date`, `cilde`) VALUES (?, ?, CURDATE(), ?)", [type, family, cilde],(err, results2) => {
                    
       
        console.log(results2, "אהרן");
     
        if (results2) {
              res.status(200).json({ success: true, body: results2 });
        }
        
      
      
    })

})






module.exports = router;