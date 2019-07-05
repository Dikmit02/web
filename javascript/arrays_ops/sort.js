let arr=[6,3,9,1,7,2]
console.log(arr.sort())


let brr=[6,3,62,26,14,35,9,1,7,2]
console.log(brr.sort())   // arrays are sort in lexographical order ie the order in ehich the words are stored in the dictonary
// js treats everything as a strings when it is sort
// if array.sort() is doesnt have an argument then the it is a higher order function


function compare(a,b){
   // return a-b;//arrange in ascending order
//    return b-a;// arrabhe in decending order
      return (a%10)-(b%10)// comapre by the unit digit

}
// let sortedarr=arr.sort(compare)
let sortedarr=brr.sort(compare)
console.log(sortedarr)


// let arr=[6,3,62,26,14,35,9,1,7,2]
// insertion sort
arr.sort(function(a,b) {
    console.log(arr)
    console.log(a+" "+b)
    return a-b  // if a-b is + value than swapped ie a >b
   // if a-b  is - than the value will not swapped ie a <b
 
})
console.log(arr)

/* here is sort is a higher order function which takes "compare" as  a functional argument*/
