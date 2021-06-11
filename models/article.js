const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    img: {type: String, required: true},
    imgAlt: {type: String, required: true},
    date: {type: Date, required: true}
})

module.exports = mongoose.model('Article', articleSchema)