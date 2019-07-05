function incr(x){
    return x+1;

}
console.log(incr(4))

console.log(incr("hello"))

console.log(incr(true))//prints 2 becz the true is 1 and the function is incrementing the value therefore true(1)+1=2
let five=incr(4)
console.log(five)
