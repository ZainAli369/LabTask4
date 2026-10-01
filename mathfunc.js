function abs() {
    if (arguments.length === 0) {
        return 0;
    }

    if (arguments.length === 1) {
        return arguments[0];
    }

    var result = [];

    for (var i = 0; i < arguments.length; i++) {

        if (arguments[i] < 0) {
            result.push(-arguments[i]);
        }
        else {
            result.push(arguments[i]);
        }
    }

    return result;
}


function ceil() {
    if (arguments.length === 0) {
        return 0;
    }

    if (arguments.length === 1) {

        var number = arguments[0];

        if (number % 1 === 0) {
            return number;
        }

        return number - (number % 1) + 1;
    }

    var result = [];

    for (var i = 0; i < arguments.length; i++) {

        var number = arguments[i];

        if (number % 1 === 0) {
            result.push(number);
        } 
        else {
            result.push(number - (number % 1) + 1);
        }
    }

    return result;
}

function floor() {

    
    if (arguments.length === 0) {
        return 0;
    }
    if (arguments.length === 1) {

        var number = arguments[0];

        if (number % 1 === 0) {
            return number;
        }
        return number - (number % 1);
    }


    var result = [];

    for (var i = 0; i < arguments.length; i++) {

        var number = arguments[i];

        if (number % 1 === 0) {
            result.push(number);
        } 
        else {
            result.push(number - (number % 1));
        }
    }

    return result;
}

console.log("ABS:")
console.log(abs())
console.log(abs(-5))
console.log(abs(-5, 4, -2, 7))


console.log("CEIL:")
console.log(ceil())
console.log(ceil(4.2))
console.log(ceil(4.2, 5.8, 7.1))


console.log("FLOOR:")
console.log(floor())
console.log(floor(4.8))
console.log(floor(4.8, 5.2, 7.9))
