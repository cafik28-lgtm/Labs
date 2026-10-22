const compose = (...fns) => {
    const events = {
        error: []
    };

    const func = x =>{
        if(fns.length === 0) return x;
        try{
            return fns.toReversed().reduce((prev, curr) => {
                    if(typeof curr !== 'function'){
                        throw new Error(`${String(curr)} is not a function!`);
                    }
                    return curr(prev);
            }, x);
        } catch(err){
            events.error.forEach(handler => handler(err));
            return undefined;

        }
    };

    func.on = (name, event) => {
        if(name === 'error'){
            events.error.push(event);
        }
        return func;
    };

    return func;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;


let f = compose(inc, twice, cube);
console.log(f(5));
f = compose(7);
f.on('error', err => {console.log(err);});
console.log(f(5));