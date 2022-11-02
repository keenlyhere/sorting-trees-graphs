function binaryExponent(exponent) {
    return console.log("exponent", 2 ** exponent);
}

// binaryExponent(2);

function binaryLogarithm(value) {
    return console.log("log2", Math.log2(value));
}

// binaryLogarithm(1024);

function binaryLogarithms(array) {
    return array.map((ele) => console.log("log", Math.log(ele)));
}

binaryLogarithms([1, 45, 164, 6, 31, 90, 671])
