/*function sayHello(){
    console.log("Hello!");
}
console.log("And the wait starts ....");

// setTimeout(sayHello,2000)// And the wait starts .... is printedafter 2 sec of Hello
//setInterval(sayHello,2000)// print Hello every 2 sec until forcelly stop

*/


// stop setInterval by clearInterval 
//setInterval stops after counting hello 5 times
var intervalId;
var runCount=0;
function sayHello (){
    runCount++;
    if(runCount>5){
        clearInterval(intervalId)
       
    }
    console.log("Hello!");
}
console.log("ANd here the wait starts....");
intervalId=setInterval(sayHello,1000)


// anonymous function 
// print and see the outpu
// setInterval(function(){
//     console.log("This runs after 1sec");
// },1000)


/*
another anonymous


var myfun=function(){
    console.log("This runs after 1sec");
}

setInterval(myfun,1000)*/