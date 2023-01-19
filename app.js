const express=require('express')
const tasks = require('./routes/tasks')
const app=express()

app.use(express.json())
app.use(express.static('/public'))



app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=>{
    res.status(200).send('hello world')
})

const port=5000
app.listen(port,()=>{
    console.log("lisening on port 5000")
})