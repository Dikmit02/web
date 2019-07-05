// let arr=[1,2,3]
// // array in js are not homogeneous
// // becausewe dont havew have datatype here
// let arr2=[1,2,3,"asd","ghghg",true,false,{a:10},[3,4,5]]
// console.log(arr2)
// console.log(arr2[7])//returns object
// console.log(arr2[8])//return array

// twodarray=[[1,2,1],[8,9,"diksha"]]
// console.log(twodarray)

// console.log(twodarray[1][0])
// console.log(twodarray[1][2])

// console.log(arr.join('-'))// converts arry into a string



// //array alice vs array splice

arr3=[1,2,3,4,5,6,7,8,9]
console.log(arr3.slice(4,5))// only cuts the value
console.log(arr3) //array is uneffected

console.log(arr3.splice(4,5))// cuts the value from index 4 to next 5 including index 4 from the array

console.log(arr3) //see the change the splice has removed that part from the array





console.log(arr3[5])// undefined 
arr3[5]='10'
console.log(arr3[5]) //empty slot
console.log(arr3) 
console.log(arr3.length) 

console.log(arr3[4]) //empty slots and it is undefined 


