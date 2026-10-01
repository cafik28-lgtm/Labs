function random(min, max){
    if(!max){
        max = min;
        min = 0;
    }

    return min + Math.floor(Math.random() * (max - min + 1));
}

console.log(random(1,7));
console.log(random(10));


function generateKey(length, characters){
    const result = [];
    for(let i = 0; i < length; i++){
        const randomIndexInCharacters = random(characters.length);
        result.push(characters[randomIndexInCharacters]);
    }

    return result.join('');
}


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 