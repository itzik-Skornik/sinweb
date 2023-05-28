const express = require("express");
const connection = require("../mySql");

const router = express.Router();

router.post("/signup", function (req, res) {
  const { email, password, LastName, firstName, address, number, number1, number2,isChecked } = req.body;





  connection.query("SELECT * FROM users_new WHERE email = ?", [email], (err, results) => {
    console.log(results);
    if (results.length > 0) {
      res.status(400).json({ msg: "נרשמתה כבר" });
      return;
    }
    else if (!(email && password && LastName && firstName && address && number)) {
      res.status(400).json({ msg: "חסר נתונים" });
      return;
    }
    else {

      console.log(req.body);

      connection.query(
        "INSERT INTO `test`.`users_new`(`email`, `password`, `LastName`,`firstName`,`address`,`number`,`number1`,`number2`,`checkbox` ) VALUES ( ?,?,?,?,?,?,?,?,?)",
        [email, password, LastName, firstName, address, number, number1, number2,isChecked],
        (err, r, f) => {
          if (err) {
            console.log(err);
            return;
          } else {
            res.status(200).json({ msg1: "User created successfully" });
          }
        }
      );
    }
  }

  )

});

module.exports = router;
