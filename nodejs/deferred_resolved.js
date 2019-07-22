function downloadPromise(){
    return new Promise(function(resolve,reject){
        console.log("Starting a new Promise");
        setTimeout(() => {
            console.log("Downoad is completed");
            resolve()
        }, 3000);
    })
}
// downloadPromise()

//Resolving promise agter some time is called the deferred_resolved
let downloadfile=downloadPromise()// prmise pending status se resolves status m hai
// it stores the result of promise and show only whn we called the .then()

setTimeout(() => {
    downloadfile.then(()=>{
        console.log("Now the promise is resolved");
    })
}, 5000);


// wen wecall resolve the then function should run but downloadpromise donot have then function