function createGreeter(name){
   let firstname=name.split(" ")[0]
   function greeter(){
       console.log("Hello "+firstname)
   }
   return greeter
}
let johngreeter=createGreeter("JOHN DEOW")
let harrygreeter=createGreeter("HARRY POTTER")

johngreeter();
harrygreeter();

// let a=10;
// a();// error will be generated becz a is not a function 

let a=function(){
    console.log("YO")

}
a();// it will run perfectly fine since a is function and YO will be printed