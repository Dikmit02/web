const express=require('express')
const app=express()

app.get('/',(req,res,next)=>{
    res.send("Hello World")
})

app.get('/greet/:tod/',function(req,res,next){
    let tod='Morning'
    
    switch(req.params.tod){
        case 'evening': tod="Evening";break;
        case 'morning': tod="Morning";break;
    }
    let greeting ="Good "+tod+"  "+req.query.name
    res.send(greeting)
    //http://localhost:1212/greet/evening?name=kallu
})

app.get('/html',(req,res,next)=>{
    res.send(`
    <html>
        <body>
            <h1>This is a Html page</h1>
            <i>looking beautiful</i>
        </body>
    </html>
    `)
})


app.listen(1212)