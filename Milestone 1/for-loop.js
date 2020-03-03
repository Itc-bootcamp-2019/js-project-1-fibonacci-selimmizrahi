function fibonacci(x) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= x; i++) {
        y = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = y;
    }
    return y;
};

console.log(fibonacci(x));
