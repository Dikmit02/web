const route=require('express').Router()

let teachers=[
    {name:'Gaurav',subject:"Java"},
    {name:'Raj',subject:"EVS"},
    {name:'Amandeep',subject:"Cplusplus"}
]

route.get('/',(req,res)=>res.send(teachers))
// route.use('/add',(req,res)=>{
//     teachers.push({
//         name:req.query.name,
//         subject:req.query.subject
//     })
//     res.send(teachers)
// })


// use post instead of /add
route.post('/',(req,res)=>{

    teachers.push({
        name:req.body.name,
        subject:req.body.subject
    })
    res.send(teachers)
})


route.get('/:id',(req,res)=>res.send(teachers[req.params.id]))
module.exports=route