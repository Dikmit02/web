const route=require('express').Router()

let students=[
    {name:'Diksha',clg:"GTBIT"},
    {name:'John',clg:"JIIT"},
    {name:'Bella',clg:"PPt"}
]

route.get('/',(req,res)=>res.send(students))
route.use('/delete',(req,res)=>{
    students.pop()
    res.send(students)
})
route.get('/:id',(req,res)=>res.send(students[req.params.id]))
module.exports=route