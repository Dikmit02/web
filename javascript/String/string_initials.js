let diksha="this is diksha's string"
console.log(diksha)

let kanika='this is kanika\'s string'
console.log(kanika)

let str=`this is diksha's string`
console.log(str)

let p="diksha"
string=`this is ${p}'s string`// p is called the template 
console.log(string)

let longstr="this is\
 long string\
 that we are\
 writing \n \
 in new line"
 console.log(longstr)

 console.log(diksha.length)
 console.log(p.length)
 console.log(str.length)

 //searching string
 
 let id="ring"
 let id2="gnir"
 console.log(diksha.indexOf(id))
 console.log(diksha.indexOf(id2))// not present therefore return the index -1
  

 let s='this is a easy job'
 console.log(s.indexOf('is',2))
 console.log(s.indexOf('is',3))
 console.log(s.indexOf('is',8))


 let s2="ab aab abbcd ba aab"
 console.log(s2.indexOf('ab'))
 console.log(s2.lastIndexOf('ab'))
 console.log(s2.length)
 //same 
 /*console.log(s2.lastIndexOf('ab',4))
 console.log(s2.indexOf('ab',4))*/
 console.log(s2.lastIndexOf('ab',4))
 console.log(s2.indexOf('ab',4))




















