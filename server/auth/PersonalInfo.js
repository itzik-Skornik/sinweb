const express = require("express");
const router = express.Router();
const connection = require("../mySql");

// נתיב לעדכון פרטים אישיים
router.post("/updatePersonal", (req, res) => {

  const { id, firstName, 
    lastName, 
    address, 
    number,
    number1, 
    number2, 
    email, 
    password,
  } = req.body;
 
  
  // בדיקת קיום משתמש לפי ID
  const findUserQuery = "SELECT * FROM users_new WHERE id = ?";
  connection.query(findUserQuery, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: "שגיאה בשרת" });
    }

    if (result.length === 0) {
      return res.status(404).json({ msg: "משתמש לא נמצא" });
    }
   

    // אם המשתמש קיים, עדכן את פרטיו
    const updateQuery = `
      UPDATE users_new 
      SET email = ?, password = ?, firstName = ?, lastName = ?, address = ?, number = ?, number1 = ?, number2 = ?
      WHERE id = ?
    `;

    connection.query(updateQuery, [email, password, firstName, lastName, address, number, number1, number2, id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "שגיאה בעדכון הפרטים" });
      }
    
      return res.status(200).json({ msg: " עודכנו בהצלחה" });
    });
  });
});

module.exports = router;
