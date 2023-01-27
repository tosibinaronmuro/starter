const express=require('express')
const connectDB=require("./db/connect.js")
const tasks = require('./routes/tasks')
const app=express()
require('dotenv').config()

app.use(express.json())
app.use(express.static('/public'))



app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=>{
    res.status(200).send('hello there')
})

const port=5000

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`listening on port ${port}`)
        })
    } catch (error) { 
        console.log(error) 
    }

}

start()