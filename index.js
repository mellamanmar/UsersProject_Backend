const express = require ("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require ('cors');
require('dotenv').config();
const userRouter = require ('./Users/routers/routes')
const forumRouter = require('./Forum/routers/forum')
const checkToken = require('./middlewares/checkToken')
const checkAuth = require('./middlewares/authToken')


const app = express()
const port = 3000


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
  origin:"*",
  methods:"GET,HEAD,POST,PATCH,PUT,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}))

//Routes
app.use ('/api', userRouter)
app.use('/api/forum', checkAuth, forumRouter)

app.listen (port, () =>  {
  console.log(`Mi puerto es ${port}`)
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => console.log('connected to db'))
.catch((err)=> console.log(err)) 

app.get('/',(req,res) => {
  res.send('Connected')
})