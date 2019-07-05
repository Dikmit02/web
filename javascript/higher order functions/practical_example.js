function createCounter(initVal,delta){
    let val=initVal;
    function counter(){
        val=val+delta;
        return val;
    }
    return counter;

}
let fiveCount=createCounter(5,5);       // fivecount=counter()
let anothercounter=createCounter(18,4)

console.log(fiveCount())                 
console.log(fiveCount())
console.log(fiveCount())

//jab tak memory se fiveCount() nahi hatega tab tak val ni hategabecz fivecount have acessibilty of the val as well
// as .ong as the function ids in memory uski bahar ki scope bhi function k sath reserve rahti hai



console.log(anothercounter())
console.log(anothercounter())
console.log(anothercounter())



