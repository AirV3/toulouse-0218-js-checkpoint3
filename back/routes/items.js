const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.query("SELECT * FROM items", (err, items) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'Nein, nein, nein, keine Verbindung'})
    }
    res.json(items)
    console.log(res)
  })
})

module.exports = router
