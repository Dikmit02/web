// prototype are like as a inheritance
//proto object is very SpeechRecognitionAlternative

let p={
    a:10
}
q=Object.create(p)
console.log(q)// nothng created for b
q.b=20
/*q=Object.create(p)
{}
__proto__:
a: 10*/

r=Object.create(q)
r.c=30

/*r
{c: 30}
c: 30
__proto__:
b: 20
__proto__:
a: 10
*/

console.log(p)
console.log(q)
console.log(r)

console.log(p.a)
console.log(q.a)
console.log(r.a)


console.log("\n")
console.log(r.__proto__===q)
console.log(r.__proto__===r)

console.log("\n")
console.log(r.__proto__);// object of q
console.log(r.__proto__.__proto__);// object of p
console.log(r.c)
console.log(r.b)
console.log(r.a)

/*r.a
10
q.a
10
p.a
10
q.a++
10
q.a
11
r.a
11
p.a
10*/

// after q.a++
/*q
{b: 20, a: 11}
a: 11
b: 20
r

{c: 30}
c: 30
__proto__:
a: 11
b: 20*/
console.log("\n");
console.log(p.isPrototypeOf(q));
console.log(p.isPrototypeOf(r));

let s={name:'diksha'}
console.log(p.isPrototypeOf(s));

//chabging the data insid ethe prototype
q.__proto__.a++;
console.log(p);

/* p
Person { name: 'harry potter', age: 15 }
> p2
Person { name: 'John Deo', age: 30 }
> Person.prototype
Person { isAdult: [Function] }
> p.__proto__
Person { isAdult: [Function] }
> p2.__proto__
Person { isAdult: [Function] }
> Person.isPrototypeOf(p)
false
> Person.isPrototypeOf(p2)
false
> Person.prototype.isPrototypeOf(p2)
true
> Person.prototype.isPrototypeOf(p)
true
>*/


// here the person is not prototype of p and p2
// person ka prototype is p and p2