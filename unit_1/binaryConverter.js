const binaryConverter = num => {
    const binary = [];
    while (num > 0) {
        const remainder = num % 2;
        binary.push(remainder);
        num = Math.floor(num / 2);
    }
    return binary.reverse().join("")
}

console.log(binaryConverter(6))