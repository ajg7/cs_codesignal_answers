// Two Sum
const csSortedTwoSum = (numbers, target) => {
    // find two elements in the numbers array that when add equals target
    // the indices of the two numbers
    // 3 + a = 12
    const result = [];
    for (const number of numbers) {
        for (const secondNumber of numbers) {
            if (number + secondNumber === target) {
                const indexNumber = numbers.indexOf(number)
                const indexSecondNumber = numbers.indexOf(secondNumber)
                console.log(indexNumber, indexSecondNumber)
                result.push(indexNumber)
                result.push(indexSecondNumber)
                return result
            } 
        }
    }
}

// Find Added Letter

const csFindAddedLetter = (str1, str2) => {
    const map1 = {};
    const map2 = {};
    for (const char of str1) {
        if (map1[char] === undefined) {
            map1[char] = 0
        }
        map1[char]++
    }
    for (const char of str2) {
        if (map2[char] === undefined) {
            map2[char] = 0
        }
        map2[char]++
    }
    for (const key of Object.keys(map2)) {
        if (map1[key] !== map2[key]) {
            return key
        }
    }
}


console.log(csFindAddedLetter("bcde", "bcdeb"))

// First Unique Char

const csFirstUniqueChar = inputStr => {
    const map = {};
    for (const char of inputStr) {
        if (map[char] === undefined) {
            map[char] = 0
        }
        map[char]++
    }
    
    for (let index = 0; index < inputStr.length; index++) {
        if (map[inputStr[index]] === 1) {
            return index
        }
    }
    
    return -1;
}