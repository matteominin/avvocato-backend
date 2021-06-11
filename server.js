const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const articleRouter = require('./routes/article')
const formazioneRouter = require('./routes/formazione')
/* SERVER */
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/articles', articleRouter)
app.use('/corsi', formazioneRouter)

/* DATABASE */
mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connesso al database'))
    .catch((err) => console.log('Error: ' + err))

app.listen(port, () => console.log('Connesso al server'))