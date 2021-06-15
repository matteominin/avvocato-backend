const router = require('express').Router()
const { Mongoose } = require('mongoose')
const articoli = require('../models/article')

router.get('/', (req, res) => {
    articoli.find()
        .then((articoli) => res.json(articoli))
        .catch((err) => res.status(400).json('Error: ' + err))
})

router.get('/:id', (req, res) => {
    articoli.findById(req.params.id)
        .then(articolo => res.json(articolo))
        .catch((err) => res.status(400).json('Error: ' + err))
})

router.post('/add', (req, res) => {
    const articolo = req.body
    if(req.body.pass === process.env.pass){
        req.body.date = new Date()
        let newArticle = new articoli(articolo)
        newArticle.save()
            .then(() => res.json('Articolo caricato'))
            .catch((err) => res.status(400).json('Error: ' + err))
    }else{
        res.status(400).json('Autenticati per proseguire')
    }
})

module.exports = router