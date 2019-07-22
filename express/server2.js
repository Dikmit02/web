const express=require('express')
const app=express()

const m1=function(req,res,next){
    console.log("We are in middleware 1");
    next()
}
const m2=function(req,res,next){
    console.log("We are in middleware 2");
    next()
}
const m3=function(req,res,next){
    console.log("We are in middleware 3");
    next()
}

app.use(m1)
app.use('/a',m2)
app.get('/a',function(req,res,next){
    res.send("Hello World")
})
app.use(m3)






app.listen(3232)