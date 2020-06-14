// Feature that allows us to create objects which are more flexible regarding the properties they might hold.
// all the key should be the same value type 
interface Index {
    [prep: string]: string;
    id: string

}

const a: Index = {
    name: 'walid',
    id: 'a1',
    age: '25'
}