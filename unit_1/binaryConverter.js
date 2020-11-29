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

// Time Complexity - O(n)
// Reason- a Reverse method is applied to the array, which is O(n)
// Space Complexity - O(n)
// Reason- An array is taking up space in memory