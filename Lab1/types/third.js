const mass = [true, 'cat', 'cost', 9, 12, false, true, 234, true, 'hat'];

const obj = { 
    number: 0, 
    string: 0, 
    boolean: 0 
};

function types(mass) {
    for (const elem of mass) {
        if (typeof elem === 'boolean') {
            obj.boolean += 1;
        }
        if (typeof elem === 'string') {
            obj.string += 1;
        }
        if (typeof elem === 'number') {
            obj.number += 1;
        }
    }
}

types(mass);
console.dir(obj);