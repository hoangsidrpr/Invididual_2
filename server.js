require('dotenv').config()

const express = require('express');
const mongoose  = require('mongoose');
const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() =>console.log('Connected to Database'))

app.listen(3000, () => console.log('Server Started'))