// IIFE- Immediate Invoked Function Expression
// function sayHello(){
//     console.log("hello");

// }
// sayHello()

// here the function becomes the anonymous function
// it is immediately created after it has been created
// we rae immediateing called after it has been created
(function (){
    console.log("hello");

})();


// it has us creating the local scope without polluting the global scope
(function(){
    var a=10;
    var b=a/5;
    console.log(a+b);

})();

//console.log(a);//error
// a and b are notcreated and not defined outside the function



//ecta leta nd scope has block scope
// creating block scope by IIFE
// var has the
if(true){
    (function(){
        var a=10;
        console.log(a);
    })();
}
// console.log(a);// var is a function sccope hence the error has occured

function doMath(){
    console.log("3^4= "+Math.pow(3,4));
    console.log("4^3= "+Math.pow(4,3));
    console.log("root(2)= "+Math.sqrt(2));
    console.log("sin(10)= "+Math.sin(10));
}
doMath();

console.log("\n");
(function (l,p,r,s){
    l("3^4= "+p(3,4));
    l("4^3= "+p(4,3));
    l("root(2)= "+r(2));
    l("sin(10)= "+s(10));
})(console.log,Math.pow,Math.sqrt,Math.sin);


// classic loop problems 
for(var i=0;i<10;i++){
    // setTimeout shuru hoke tak hi i has become 10 
    // therefore 10 is printed 10 times
    setTimeout(function(){
        console.log(i);
    },100)
}

console.log("\n");
for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },100)
    })(i)
    // we are rebinding value of i to j 
    
}
console.log("\n");
// simpler manner of above
for(let i=0;i<10;i++){
    // let creates an internal closure which gets bounds to every efficient of the function and a
    //new i gets inide the closure when we are using i everytime
    setTimeout(function(){
        console.log(i);
    },100)
}
console.log("\n");
for(var i=0;i<10;i++){
  
    setTimeout(console.log,100,i)
    // func, time, argumnt
}