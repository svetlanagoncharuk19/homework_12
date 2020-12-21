function sum() {
    let res = 0;

    return function(x) {
        res += x;
        return res;
    }
};

let result = sum();

console.log(result(2));
console.log(result(3));
console.log(result(4));



function createCounter (start = 0, step = 1) {
    let count = start;

    function counter () {
        let res = count;
        count += step;
        return res;
    }
    counter.reset = function (value = 0) {
        count = value;
        return count;
    }

    return counter;
}

const counter = createCounter(5, 3);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.reset(0));
console.log(counter());
console.log(counter());
console.log(counter());
