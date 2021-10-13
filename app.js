const express = require('express');
const app = express ();
const mongoose = require('mongoose')
const { MONGOURI } = require('./keys');


app.use(express.json())
mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log('mongoose connected');
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})


app.listen(5050);
