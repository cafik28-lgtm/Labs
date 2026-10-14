function usingFor(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

function usingForOf(...args){
    let sum = 0;
    for(i of args){
        sum += i;
    }
    return sum;
}

function usingWhile(...args){
    let sum = 0;
    let i = 0;
    while(i < args.length){
        sum += args[i];
        i++;
    }
    return sum;
}

function usingDoWhile(...args){
    let sum = 0;
    let i = 0;
    do{
        sum += args[i];
        i++;
    } while(i < args.length);
    return sum;
}

function usingReduce(...args){
    return args.reduce((acc, curr) => acc + curr, 0);
}

const a = usingFor(1, 2, 3);
const b = usingForOf(1, 5, 3); 
const c = usingWhile(6, 5, 1); 
const d = usingDoWhile(5, 5, 1); 
const e = usingReduce(2, 5, 1, 2); 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);