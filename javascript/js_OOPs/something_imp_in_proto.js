let x="nmknkmflkm"
console.log(x.__proto__);
console.log(x.__proto__==String.prototype);
console.log(true.__proto__==Boolean.prototype);
console.log((10).__proto__==Number.prototype);

d={k:10}
console.log(d.__proto__==Object.prototype);


let a={x:10}
console.log(a);
console.log(a.__proto__==Object.prototype);
console.log(Object.prototype.isPrototypeOf(String.prototype));

console.log(Object.prototype.isPrototypeOf(Boolean.prototype));

console.log(Object.prototype.isPrototypeOf(Number.prototype));
console.log(Object.prototype.isPrototypeOf(Function.prototype));
console.log(Object.prototype.isPrototypeOf(undefined));

/*> "jdjidisjeisje".substr(3)
'idisjeisje'
> String.prototype.substr
[Function: substr]
> [3,6,5,2].sort()
[ 2, 3, 5, 6 ]
> Array.prototype.sort
[Function: sort]*/

//all the default dunction of string arrays are defined inside the prototype eg substring sort