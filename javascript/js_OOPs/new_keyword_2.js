// console.log(this)// this is the emoty object
// // browswe deosnt have a global object it has a window object and the functions which are defined globally are stored inside the window object of the browser
//  function fun(){
//    // console.log(this)// this refer to the global object
//    console.log(global==this)//true
//    // global is a special object in node.js
//   // all function that can be called from global scope are exist in global object
//   // global is a special object inside which all the global items are present in node.js
//   // global is not define in browser
//   // the work of global in browser is done by window

//   /* in browser 
//   var x=10;
//   window.x gives 10
//   there the window is global for browser*/
  

//  }
//  fun();//true //  this of function refers to global
//  new fun();// false // this of the function refers to



 
console.log("\n\n\n\n");
 var s;
 function fun2(){

   this.p="something";
   this.q="diksha"
    s="bill gates"
   console.log(this==global);
   return 10;
 }
// let o1=fun2();// this is global
 let o2=new fun2();// return statemnet has no purpose // this is func2
 console.log("\n");
// console.log(o1);
 console.log(p);
//  console.log(o2);
//  console.log("\n");
//  console.log(o1.p);
//  console.log(o1.s)
//  console.log("\n");
//  console.log(o2.p);
//  console.log(o2.s);

