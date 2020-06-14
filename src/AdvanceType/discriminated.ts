// It's a pattern which you can use when working with union types that makes implementing type guards easier
// discriminated using literal type (bird)
interface A {
    type: 'bird',
    flySpeed: number
}
interface B {
    type: 'hourse',
    runSpeed: number
}

// union type
type Animal = A | B

function printD(data: Animal) {
    if (data.type === 'bird') {
        console.log('bird')
    } else {
        console.log('hourse')
    }
}