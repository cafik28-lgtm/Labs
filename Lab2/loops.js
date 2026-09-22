/*
Цикли
Реалізуйте функцію range(start: number, end: number): array 
яка віддає масив чисел з діапазону [15, 30], включаючи крайні числа.
 */

function range(start, end){
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let array = [];

    for(let i = 0; i <= end - start; i++){
        array[i] = start + i;
    }

    return array;
}

console.log('Array of range(15,30):');
console.log(range(15, 30));
console.log('===========================');

/*
Реалізуйте функцію rangeOdd(start: number, end: number): array 
яка віддає масив непарних чисел з діапазону [15, 30], включаючи крайні числа.
*/

function rangeOdd(start, end){
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let oddArray = [];

    for(let i = 0; i <= end - start; i++){
        let temp = start + i;
        if(temp % 2 !== 0) 
            oddArray.push(temp); 
    }

    return oddArray;
}

console.log('Odd array of range(15,30):');
console.log(rangeOdd(15, 30));