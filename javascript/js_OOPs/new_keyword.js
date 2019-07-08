function Fruit(color,taste){
    this.color=color;
    this.taste=taste;


    console.log(this==global)
    return 'valid only for watermelon'

}
 let watermelon=Fruit("red","juicy")
let orange =new Fruit("orange","sour")

 let apple=new Fruit("red","sweet")
let mango={
    color:"yellow",taste:"sweet"
}

console.log("\n");
// // here mangoapple and orange all are objects
 console.log(watermelon);// undefined becz this refre to 
 console.log(color+"  "+taste);
 console.log("\n");

console.log(orange)// this is Fruit
let q=JSON.stringify(orange)

 
 console.log(color+"  "+taste);//ans of watermelon is printed n not of orange becz for orange color an taste is not defined 

// console.log("\n");
 console.log(q)
console.log(apple)
 console.log(mango)// object
 console.log(watermelon.color)
 console.log(mango.color)


