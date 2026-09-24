const average = (a, b) => (a+b)/2;
const square = (x) => x**2;
const cube = (x) => x**3;

 function calculate(){
    const result = [];
    for(let i = 0; i <= 9; i++){
        result.push(average(
            square(i), 
            cube(i)
        ));
    }
    return result;
 }

 console.log(calculate());
