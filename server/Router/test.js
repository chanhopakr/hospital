const express = require("express");
const router = express.Router();

const mariadb = require("../../database/connect/maria.js");

router.get("/", (req, res) => {
  res.json({ username: "sell" });
});

router.get('/select', (req, res) => {
  mariadb.query('SELECT * FROM user', (err, rows) => {
    if(!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.send(err);
    }
  })
})
module.exports = router;
