let notes=['do','re','mi','fa','so','la','ti','do']
//slice
//notes.slice(4)
//notes.slice(4,6)
console.log(notes)

//splice

// let omit=notes.splice(4,6)
// console.log(omit)
// console.log(notes)

// let omit=notes.splice(4)
// console.log(omit)
// console.log(notes)

// let omit=notes.splice(4,2)// 2 is length
// console.log(omit)
// console.log(notes)

// splice2
// notes.splice(0,2,'diksha') // first is replaced by diksha and second isremoved
// console.log(notes)

// notes.splice(0,2,'diksha','huhuhuhuhhh','huhuhduhejhdehwij2qwo') // first and second  is replaced by diksha ,huhuhuhuhhh and third is added and all the other arec shifted
// console.log(notes)

notes.splice(0,2,'diksha','diksha') // first and second  is replaced by diksha ,huhuhuhuhhh and third is added and all the other arec shifted
console.log(notes)


// concat
console.log(notes.concat('sa','re','ga'))// a new array is created everytime the concat is called
console.log(notes)



console.log(notes.concat(['sa','re','ga']))// a new array is created everytime the concat is called

console.log(notes)