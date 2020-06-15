// array is an example for generics type 
// first style 
const garr: String[] = []
// second stylr 
const garr1: Array<string> = []

// Another generic type which is built into typescript is the promise type.
const gprint: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    }, 2000)
})