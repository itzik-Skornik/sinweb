const express = require("express");
const connection = require("../mySql");
const router = express.Router();

router.post("/addUpdate", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ msg: "Missing update text" });
  }

  connection.query(
    "INSERT INTO updates (text, date) VALUES (?, CURDATE())",
    [text],
    (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "Error saving update" });
      }
      res.status(200).json({ success: true });
    }
  );
});

router.get("/updates", (req, res) => {
  connection.query("SELECT * FROM updates ORDER BY date DESC", (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Error fetching updates" });
    }
    res.status(200).json({ body: results });
  });
});

module.exports = router;
