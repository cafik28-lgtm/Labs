function max(mass){
    let max_elem = mass[0][0];
    for(let row of mass){
        for(let col of row){
            if(max_elem < col){
                max_elem = col;
            }
        }
    }
    return max_elem;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);