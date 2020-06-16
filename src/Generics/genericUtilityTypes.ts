//Partial
interface PD {
    name: string,
    id: number
}

function gerPd(name: string, id: number): PD {
    // if you try to assign empty object you will get an error 
    let obj: Partial<PD> = {};
    obj.id = id;
    obj.name = name;
    return obj as PD
}

// Readonly  : if you try to add you will get an error 
const garray: Readonly<string[]> = ['walid']

// obj
const gobj: Readonly<{ name: string }> = { name: 'e' }
