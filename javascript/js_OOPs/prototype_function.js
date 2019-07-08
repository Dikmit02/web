// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.isAdult=function(){
//         return age>18
//     }
    

// }
// let p=new Person('harry potter',15)
// let p2=new Person('John Deo',30)
// console.log(p.isAdult());
// console.log(p2.isAdult());
// console.log(p2.isAdult()==p.isAdult());
// here the function is Adult is running twice for both the p and p2
// memory is wasting as isadult has been defined inside both p and p2 sepeartely 
//hence the ssame code copy is written in  two diff obj with same logic

//if we want only one copy of isAdult function than 
function Person(name,age){
    this.name=name;
    this.age=age;
   
    

}
Person.prototype.isAdult=function(){
    return this.age>18
}

Person.prototype.city="Delhi"
let p=new Person('harry potter',15)
let p2=new Person('John Deo',30)
console.log(p.isAdult());
console.log(p2.isAdult());
//here the they are defined only once
console.log(p.isAdult()==p2.isAdult());
console.log(p2.isAdult()==p.isAdult());


/* p
Person { name: 'harry potter', age: 15 }
> p2
Person { name: 'John Deo', age: 30 }
> Person.prototype
Person { isAdult: [Function],city: Delhi }
> p.__proto__
Person { isAdult: [Function] }
> p2.__proto__
Person { isAdult: [Function] }
> Person.isPrototypeOf(p)
false
> Person.isPrototypeOf(p2)
false
> Person.prototype.isPrototypeOf(p2)
true
> Person.prototype.isPrototypeOf(p)
true
>*/


// here the person is not prototype of p and p2
// person ka prototype is p and p2