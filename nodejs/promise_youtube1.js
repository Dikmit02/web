let cleanRoom=function(){
    return new Promise(function(resolve,reject){
        resolve('Cleaned The room')
    })
}

let GarbageRoom =function(p){
    return new Promise(function(resolve,reject){
        resolve('Garbage Resolved')

    })
}
let winIceIcream=function(p){
    return new Promise(function(resolve,reject){
        resolve("won IceCream")
    })
}

cleanRoom().then(function(){
    return GarbageRoom()
}).then(function(){
    return winIceIcream()
}).then(function(){
    console.log("finished");
})