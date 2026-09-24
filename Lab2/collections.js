const contactsArray = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Dasha Parynkina', phone: '+380633789812' },
    { name: 'Andrew Kirs', phone: '+380276784356' }
];

function findPhoneByName(name){
    for(let i of contactsArray){
        if(i.name === name) return i.phone;
    }
    return "Not found";
}

console.log(`Marcus Aurelius phone: ${findPhoneByName('Marcus Aurelius')}`);
console.log(`Andrew Kirs phone: ${findPhoneByName('Andrew Kirs')}`);
console.log(`Dasha Parynkina phone: ${findPhoneByName('Dasha Parynkina')}`);
console.log(`No name phone: ${findPhoneByName('No name')}`);

const hash = {
    'Marcus Aurelius': '+380445554433',
    'Dasha Parynkina': '+380633789812',
    'Andrew Kirs': '+380276784356'
};

function findPhoneByNameHash(name){
    return hash[name] || 'Not found';
}

console.log(`\nMarcus Aurelius phone: ${findPhoneByNameHash('Marcus Aurelius')}`);
console.log(`Andrew Kirs phone: ${findPhoneByNameHash('Andrew Kirs')}`);
console.log(`Dasha Parynkina phone: ${findPhoneByNameHash('Dasha Parynkina')}`);
console.log(`No name phone: ${findPhoneByName('No name')}`);

