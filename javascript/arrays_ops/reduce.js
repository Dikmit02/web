let arr=[1,2,3,4,5,6,7,8]
let sum=arr.reduce(function(acc,item){
    return acc+item;
})
console.log(sum)

let factorial=arr.reduce(function(acc,item){
    console.log(acc+" "+item)
    
    return acc*item;
})
console.log(factorial)