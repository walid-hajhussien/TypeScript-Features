//Helps us deal with null data

// with JS if x = '' | null | undefined | 0 | false => y will be 5
let x = null
let y = x || 5 // y = 5

// && 
x = 1
y = x && 9 // y = 9 

// type script x= null or undefined
x = 1
y = x ?? 5 // y = 5