let notes=['do','re','mi','fa','so','la','ti','do']
//slice
notes.slice(4,6)
console.log(notes)

//splice

// let omit=notes.splice(4,6)
// console.log(omit)
// console.log(notes)

// let omit=notes.splice(4)
// console.log(omit)
// console.log(notes)

let omit=notes.splice(4,2)
console.log(omit)
console.log(notes)

// splice2
notes.splice(4,2,'diksha')
console.log(notes)