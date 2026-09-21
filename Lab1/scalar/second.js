const obj = { n: 5 };

function inc(num){
    if(num && typeof num.n === 'number'){
        num.n += 1;
    }
}

inc(obj); 
console.dir(obj);