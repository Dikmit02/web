// the value assing to the string are immutatable ie it cannot be change it can only be changed when 
// we do assign something else to that string
let str="ASdasdasdas"

//sunstring all oeration they create new string and they cannot ever change the value of the str
console.log(str.indexOf("a"))
console.log(str.indexOf("a",4))// 4 index k baad a kab ayega
console.log(str.substr(3))//3 and uske age ki string
console.log(str.substr(3,5))// 5 letter ki string including the character at index 3
console.log(str.substr(-7,2))// string from -7 index to length
console.log(str.substring(3))// 3 se age ki poori string

//the positive indexes of both the substring and the slices gi es the same output
console.log(str.substring(3,5))//3 se 5-1=4 tak ki string
console.log(str.slice(3,5))

console.log(str.substring(-5,-3))// gives no result

str1="abcdefghi"
//slicing always done in ----> direction and never in <----- 
console.log(str1.slice(-5,-3))
console.log(str1.slice(-3,-5))//gives no result
console.log("diks")

console.log("\n")
console.log(str.split('a'))// at every a in the string it is replaced by , and array is returned


let url="https://youtube.com/watch?v=hggthij293674tchbhg8ry784uwqbxucg78"
console.log(url.split('?'))
console.log(url.split('='))
console.log(url.split('?')[1])

