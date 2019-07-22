function someAsynfunction(callback){
    console.log("Beginning of task");
    setTimeout(function(){
        console.log("Ending of task");
        callback()
        console.log("diksha");

    },3000)

    
 
}


// someAsynfunction(function(){
//     console.log("WE did some task")
// })

//promisification
let someTaskPromise=function(){
    return new Promise(function(resolve,reject){
        someAsynfunction(resolve)
    })
}



someTaskPromise()
    .then(function(){
        console.log("after task is completes");
    })














