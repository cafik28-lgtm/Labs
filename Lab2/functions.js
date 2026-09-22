/*
Вкладені виклики функцій у циклі
Реалізуйте функцію average з сигнатурою average(a: number, b: number): number
 що обчислює середнє арифметичне своїх аргументів.
 
Реалізуйте функцію square із сигнатурою square(x: number): number
 що обчислює квадрат свого аргументу.

Реалізуйте функцію cube із сигнатурою cube(x: number): number
 що обчислює куб свого аргументу.

Викличте функції square та cube у циклі від 0 до 9,
 обчислюючи, відповідно квадрат та куб від змінної циклу. 
 Передайте квадрат і куб на кожній ітерації в функцію average. 
 Результати складіть у масив і поверніть із функції calculate.
 */

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