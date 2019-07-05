console.log("\n")

const y=10;
function func(){
    const y=20;
 
     console.log(y)
     if(true){
    
         const y=30;
        
         console.log(y)
     }
     console.log(y)

     
}

//const have have block scopr
func()
console.log(y)

