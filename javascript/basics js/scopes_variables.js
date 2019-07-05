var x=10;
function myfun(){
    var x=20;
     x+=1
     console.log(x)
     if(true){
         // if doesnt create var scope the 30 value is gone to line 3 wala x 
         // line 3, 4, 5,9,10,11,13 all pointing to the ssame x
         var x=30;
         x+=1;
         console.log(x)
     }
     console.log(x)

     
}

//var have have function scopr
//var doent have a vlock scope
myfun()
console.log(x)
 

console.log("\n")
//let have a block level scope 
let x1=10;
function myfunn(){
    let x1=20;
     x1+=1
     console.log(x1)
     if(true){
         // if doesnt create let scope the 30 value is gone to line 3 wala x1 
         // line 3, 4, 5,9,10,11,13 all pointing to the ssame x1
         let x1=30;
         x1+=1;
         console.log(x1)
     }
     console.log(x1)

     
}

//let have have block scopr

myfunn()
console.log(x1)



