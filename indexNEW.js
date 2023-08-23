const express = require ("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require ('cors');
const userRouter = require ('./Users/routers/routes')
const forumRouter = require('./Forum/routers/forum')


const app = express()
const port = 3000


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use (cors())

//Routes
app.use ('/api', userRouter)
app.use('/api/forum', forumRouter)

app.listen (port, () =>  {
  console.log(`Mi puerto es ${port}`)
})

app.get('/',(req,res) => {
  res.send('Connected')
})

try {
  mongoose.connect(process.env.MONNGO_DB_URI)
} catch(error) {
  console.log(error)
}
finally {
  console.log('connected to db')
}