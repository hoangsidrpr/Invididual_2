const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/testdb", ()=> {
    console.log("connected")
}, e => console.error(e))