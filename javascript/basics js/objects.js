let obj={
    a:10,
    b:"hello",
    c:true

}
// a b c are properties and eahc properties haave value
//they may be of primitive type or have ither obj as their values

console.log(obj.a);
console.log(obj.c);

let obj1={
    a:10,
    b:"hello",
    c:true,
    d:{
        p:10,
        q:20,
        r:{
            x:"value"
        }

    }
}
console.log(obj1.d.r.x);

obj1.l=1111;//new properteies added to objects
console.log(obj1.l);


//let obj1.l=1111;// this is inavlid syntax for defining ht obj properties
console.log(obj1);

//deleting from objects
delete obj1.b;
console.log(obj1);