/*//classes insie js are not same as classes inside java 
function Person(name,age){
    this.firstName=name.split(" ")[0]
    this.lastName=name.split(" ")[1]
    this.age=age
    this.isAdult=function(){
        return age>18
    }
}
//upto } it behaves as a constructor as well
let p=new Person("Diksha Mittal",20)// creating objects of the  person class
let m=new Person("Manikya Mittal",12)//first name last name are variables of objects 
// is adult is function of object h and p of class person 
// we are sending the argumrents ie Diksha Mittal and Manikya Mittal to the constructor of the class

console.log(p)
console.log(p.isAdult)
console.log(p.isAdult())
console.log(m.isAdult())
*/
// public and protected as of java
function Personnnnnn(name,age){
    this.firstName=name.split(" ")[0]
    this.lastName=name.split(" ")[1]
   // let mage=age// closure property age is available insid ethe scope of the isAdult function but not available to objects pp and mm
    this.isAdult=function(){
        // return mage>18
        return age>18// age is an srgument therefore it is also present in the closure of the function
        // age is acting as private variable  it is like a private variable because of closure 
        // all other are public variables
    }
}
let pp=new Personnnnnn("Diksha Mittal",20)
let mm=new Personnnnnn("Manikya Mittal",12)
console.log(pp)

console.log(pp.isAdult())
console.log(mm.isAdult())