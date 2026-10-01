var givenPrime = 3;
var nextPrime = givenPrime + 1;

while (true) {
    var isPrime = true;

    for (var i = 2; i < nextPrime; i++) {
        if (nextPrime % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime after", givenPrime, "is", nextPrime);
        break;
    }

    nextPrime++;
}