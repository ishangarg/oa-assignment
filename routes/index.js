const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index.ejs', { text: 'world' })
})

router.get('/vehicle/:id', (req, res) => {
    let id = req.params.id
    // res.send(id)
    res.render('vehicles.ejs', {id:id})
})

module.exports = router