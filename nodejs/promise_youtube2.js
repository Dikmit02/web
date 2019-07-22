let cleanRoom=function(){
    return new Promise(function(resolve,reject){
        resolve('Cleaned The room')
    })
}

let GarbageRoom =function(message){
    return new Promise(function(resolve,reject){
        resolve(message+' Garbage Resolved')

    })
}
let winIceIcream=function(message){
    return new Promise(function(resolve,reject){
        resolve(message+ " won IceCream")
    })
}

// cleanRoom().then(function(result){
//     return GarbageRoom(result)
// }).then(function(result){
//     return winIceIcream(result)
// }).then(function(result){
//     console.log(result+"   finished");
// })

//all of them to finished
// Promise.all([cleanRoom(),GarbageRoom(),winIceIcream()]).then(function(){
// console.log('all are finished');
// })

// any one run
Promise.race([cleanRoom(),GarbageRoom(),winIceIcream()]).then(function(){
    console.log('one of them is finished');
})