const router = require('express').Router()
const corsi = require('../models/formazione')


router.get('/', (req, res) => {
    let arr = []
    corsi.find().sort({date: -1})
        .then(corsi => arr.push(corsi))
        .catch(err => res.status(400).json('Error: ' + err))

    corsi.countDocuments()
        .then(count => arr.push(count))
        .then(() => res.json(arr))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:number', (req, res) => {
    let arr = []

    corsi.find().sort({date: -1}).limit(Number(req.params.number))
        .then(corsi => arr.push(corsi))
        .catch(err => res.status(400).json('Error: ' + err))

    corsi.countDocuments()
        .then(count => arr.push(count))
        .then(() => res.json(arr))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add', (req, res) => {
        let newCorso = new corsi(req.body)
        newCorso.save()
            .then(res.json('Corso caricato'))
            .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router