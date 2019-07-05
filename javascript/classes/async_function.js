// function task(done){
//     console.log("doing some task")
//     done();
// }
// task(function(){
//     console.log("task was done")
// })
// console.log("we did a task")

/*function done () {
    console.log("task was done")// after 10 sec it is called
}
setTimeout(done,10000)//first call
console.log("we did a task")// second call

// we have never call the done function it is called by the setTimeout
// nodejs and browser inbuild function is setTimeout
// after 10000ie 10 sec the done function is automatically called due to setTimeout
// this delay is async in nature and other things are happen in this 

*/

function task(done){
    console.log('we are doing a task')
    setTimeout(done,1000)

}
task(function(){
    console.log("task was done")
})
console.log("we did a task")
// here done function is
// function(){
//     console.log("task was done")
// }

// first task is clled then we did a task called and then done is called