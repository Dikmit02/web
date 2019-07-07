let x={
    a:10,b:"Asd", // ais propety and 10 is its value   
    c:false,
    d:[1,2,3],
    e:{
        p:"Asd",
        q:true
    }
}
console.log(x)

x.k=[2457,135]//statement ewuse =
console.log(x)


const obj={
    k1:'asd',
    k2:10,
    k3:false
}
// obj={a:10}// generatearroe becz bj is constant

//in const we cannot ass the variable with const at lhs 
obj.k4=123;
console.log(obj)
console.log(obj.k4)

delete obj.k1
console.log(obj.k1)

const arr=[1,2,3]
arr.push(5)
console.log(arr)
