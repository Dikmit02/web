const express=require('express')
const app=express()

app.get('/a',(req,res)=>res.send("AAAAAA"))
app.get('/b',(req,res)=>res.send("BBBBBB"))

app.get('',(req,res)=>res.send(`<h1>Error 404</h1>`))


app.listen(12345)