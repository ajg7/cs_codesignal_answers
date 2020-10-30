/*Reverse Integer Bits*/

/*
Given an integer, write a function that reverses the bits (in binary) and returns the integer result.
*/

const csReverseIntegerBits = n => {
    const binary = [];
    if (n !== 0){
        while (n > 0) {
            const remainder = n % 2;
            binary.push(remainder);
            n = Math.floor(n / 2);
        }
    } else {
        return 0
    }
    const stringedBinary = binary.join("").toString()
    return parseInt(stringedBinary, 2);
}

console.log(csReverseIntegerBits(417))

// Convert Binary to ASCii
const csBinaryToASCII = binary => {
    const result = []
    for (let i = 0; i < binary.length; i += 8) {
        const slicedBinary = binary.slice(i, i + 8);
        const decimal = parseInt(slicedBinary, 2)
        result.push(String.fromCharCode(decimal))
    }
    return result.join("")
}

console.log(csBinaryToASCII("011011000110000101101101011000100110010001100001"))

// Raindrops
const csRaindrops = number => {
    const result = [];
    if (number % 3 === 0) {
        result.push("Pling");
    } 
    if (number % 5 === 0) {
        result.push("Plang");
    }
    if (number % 7 === 0) {
        result.push("Plong");
    }
    if (result.length === 0) {
        result.push(number);
    }
    return result.join("")
}

console.log(csRaindrops(30))