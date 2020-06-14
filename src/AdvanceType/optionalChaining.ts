// safely access nested properties and nested objects

const objO = {
    name: 'walid',
    data: {
        id: {
            code: 25
        }
    }
}

console.log(objO?.data?.id?.code)