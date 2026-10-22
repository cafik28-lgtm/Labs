const pipe = (...fns) => {
    if (fns.find(fn => typeof fn !== "function")) {
        throw new Error("All arguments must be a function");
    }
    return x => fns.reduce((prev, curr) => curr(prev), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x);

const f1 = pipe(inc, inc);
const y = f1(7);
console.log(y);

const f2 = pipe(inc, 7, cube);
const z = f2(2);
console.log(z);