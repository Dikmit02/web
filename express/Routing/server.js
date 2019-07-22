const express=require('express')
const app=express()

const teacherRoute=require('./routes/taechers')
const studentRoute=require('./routes/students')

//for postman
app.use(express.json)
app.use(express.urlencoded({extended:true}))



app.use('/students',studentRoute)
app.use('/teachers',teacherRoute)

app.listen(1234)