const express=require('express')
const router=require ('./routes/routes.js')
const dotenv = require('dotenv')
const consume = require('./kafka/consume.js');
const app=express()

dotenv.config()

consume()

app.listen(3002,()=>{
    console.log('server started');
})




