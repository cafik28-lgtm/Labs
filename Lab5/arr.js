const array = () => {
    const data = [];
    const elem = (i) => data[i];
    elem.push = (x) => data.push(x);
    elem.pop = () => data.pop();

    return elem;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1));
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop());

console.log(arr.pop());