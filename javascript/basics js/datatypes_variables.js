let num=1;
let str="this is astring";
let bool=true;
//there is no way of specifying the type but data always have a type
console.log(num);
console.log(typeof(num));


num="hello";
console.log(typeof(num));


console.log(num);//originally num was a int but it is now string 
// variable is a container and data is what what be put inside it
// data always have a type but some lang say that variable also have a type ie c c++ java
//but in js variable doent have a type all datatype can be stored in variable in javascript

console.log(typeof(10));
console.log(typeof("diksha"));
console.log(typeof(true));

// type of doesnt tell the type of variable it tells which the data inside the variable
//typeof itself return a string 
// try on console and evalutes

//js is not a type safe language

//in REPL everyline returns somethings and its print at the same time ie everyline is executed
// in vscode the entire file gets executed and the overall output is returned. everyline is interpreted but no undefined is print 
let y=10/5
console.log(y)

console.log(typeof 10=="number")

// console.log(typeof 10==number) it will generate an error becuase the return of typeof is a string
//and here if we compare the numbre with typeof(10) then the return will be true

console.log(typeof(null))// type is object
console.log(typeof(undefined))// type is undefined
console.log(typeof([1,2,3])) // type of array is also object


// there is no differnce in character n string in js
//for both the return value is string 
console.log(typeof('v'))
console.log(typeof("v"))


// there is no differnce in float n int in js
//for both the return value is number
console.log(typeof(10.1))
console.log(typeof(22))



// largest number in js
//it depends fro compiler to compiler
console.log(Number.MAX_VALUE);


//for safe side we use it is satndard in any version NY BROWSER 

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
