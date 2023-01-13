require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose")
const userRoutes = require('./routes/user')

const app = express()

const cors=require("cors")
app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/users', userRoutes)

const url = 'mongodb://127.0.0.1:27017/authSys';

mongoose.set("strictQuery", false);
mongoose.connect(url, {useNewUrlParser: true,})
    .then(()=>{
        console.log("Connected to database")
        
        app.listen(process.env.PORT,()=>{

            console.log("Server started and listening on port", process.env.PORT)
        })
    })
    .catch(e=> console.log(e))
