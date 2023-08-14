const express = require ("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require ('cors');


const app = express()
const port = 3000


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use (cors())

app.listen (port, () =>  {
  console.log(`Mi puerto es ${port}`)
})

try {
  mongoose.connect('mongodb+srv://marimelissamc:1357913579@cluster0.paodnfx.mongodb.net/')
} catch(error) {
  console.log(error)
}
finally {
  console.log('connected to db')
}