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

router.post('/', (req, res) => {
  const {name, picture} = req.body
  const query = 'INSERT INTO items (name, picture) VALUES (? ,?)'
  db.query(query, [name, picture], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: "Don't want to register new item"})
    }
    res.json(result)
    console.log(result)
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  const query = 'DELETE FROM items WHERE id = ?'
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: "Don't want to delete bro !"})
    }
    res.json(result)
  })
})

module.exports = router
