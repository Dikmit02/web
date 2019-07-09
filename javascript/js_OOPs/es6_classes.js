class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Student extends Person{
 constructor(name,age,school){
     super(name,age)// called the person constructor
     this.school=school
     
 }
}
let p=new Person("harry potter",15)//only as a class
//let p2=Person("diksha",25)
//TypeError: Class constructor Person cannot be invoked without 'new'
// internally it is prototype and function 

let s=new Student('diksha mittal',22,"ggsipu")///uses the name annd age if person
console.log(p);
console.log(s);
/*> s.__proto__
Student {}
> s.__proto__.__proto__
Person {}
> Student.prototype.isPrototypeOf(s)
true
> Student.prototype.isPrototypeOf(p)
false
> Person.prototype.isPrototypeOf(p)
true
> Person.prototype.isPrototypeOf(s)
true*/