const express = require("express");
const connection = require("../mySql");
const router = express.Router();


router.post("/Community_list", (req, res) => {
    const { email } = req.body;
    console.log( email, "gsfdggdgf");
    // let log = false;

    if ( email) {
        connection.query("SELECT * FROM users_new WHERE email = ?", [email], (err, results) => {
            console.log(results, "איציק");
          if (results.length>0 && results[0].manager == 1) {
             
                connection.query("SELECT email,LastName,firstName, address, number FROM users_new",(err,results)=>{
console.log(results,"שימי");
                    res.status(200).json({ success: true, body: results });
                })
            } else {

                res.status(400).json({ success: false ,msg: " הנתונים שגויים" });
            }
        });
    } else {
        res.status(400).json({ success: false,msg: "חסר נתונים" });
    }
});

module.exports = router;