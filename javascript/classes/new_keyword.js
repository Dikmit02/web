function Fruit(color,taste){
    this.color=color;
    this.taste=taste;


    console.log(this==global)

}
let watermelon=Fruit("red","juicy")
let orange =new Fruit("orange","sour")
let apple=new Fruit("red","sweet")
let mango={
    color:"yellow",taste:"sweet"
}

console.log("\n");
// here mangoapple and orange all are objects
console.log(watermelon);// undefined becz this refre to global
console.log(orange)// this is Fruit
console.log(apple)
console.log(mango)// object