/* Remove the Vowels */
const csRemoveTheVowels = inputStr => {
    const vowels = new Set("aeiou")
    const result = []
    for(const char of inputStr) {
        if (!vowels.has(char.toLowerCase())) {
        result.push(char)
        }
    }
    return result.join('')
}

// Shortest Word

const csShortestWord = inputStr => {
    let minLength = Infinity
    let currWordLength = 0
    for (let char of inputStr) {
        if (char !== ' ' && char !== '\t' && char !== '\n') {
            currWordLength++
        } else {
            minLength = Math.min(minLength, currWordLength)
            currWordLength = 0
        }
    }
    minLength = Math.min(minLength, currWordLength)
    return minLength
}

// Sum of Positive

const csSumOfPositive = inputArr => {
    const result = inputArr.filter(number => number > 0)
    const sum = result.reduce((accumulator, currentValue) => {
        return accumulator += currentValue
    }, 0)
    return sum
}

// Longest Possible

const csLongestPossible = (str1, str2) => {
    const set = new Set([...str1, ...str2])
    const result = Array.from(set)
    return result.sort().join("")
}

// Anything but Five
const csAnythingButFive = (start, end) => {
    let count = 0;
    for (let num = start; num <= end; num++) {
        if (hasFive(num)) continue
        count++;
    }
    return count;
}

const hasFive = num => {
    num = Math.abs(num)
    while (num > 0) {
        const digit = num % 10;
        if (digit === 5) {
            return true;
        } 
    num = Math.floor(num / 10);
    }
    return false;
}
