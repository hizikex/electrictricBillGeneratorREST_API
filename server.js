//impoort express model
const express = require('express');
//import the database
const db = require('./config/config.json')
//import the route
const powerRouter = require('./route/router.js');

//port number
const PORT = 8888;

const app = express();

app.use(express.json())

app.use('/v1', powerRouter)

app.listen(PORT, ()=>{
    console.log("App listening on PORT: " + PORT)
})