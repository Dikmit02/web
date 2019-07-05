// prototype are like as a inheritance
//proto object is very SpeechRecognitionAlternative

let p={
    a:10
}
q=Object.create(p)
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

console.log(r.__proto__===q)
console.log(r.__proto__===r)
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
