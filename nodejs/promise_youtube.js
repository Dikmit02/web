let promiseToCleanTheRoom=new Promise(function(resolve,reject){
    //cleaning the room

    let isClean=false;

    if(isClean){
        resolve('Clean')

    }
    else{
        reject('Not Clean')
    }
})
promiseToCleanTheRoom.then(function(fromResolve){
    console.log('The room is '+fromResolve);
}).catch(function(fromReject){
    console.log('The room is '+fromReject);
})