const express = require("express");
const connection = require("../mySql");
const router = express.Router();
router.get("/updates", (req, res) => {
    connection.query("SELECT * FROM updates ORDER BY date DESC", (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "Error fetching updates" });
      }
      res.status(200).json({ body: results });
    });
  });
  
  module.exports = router;