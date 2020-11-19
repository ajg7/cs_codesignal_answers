// Isomorphic String 
function csIsomorphicStrings(a, b) {
    if (a.length !== b.length) return false
    
    const mapA = {}
    const mapB = {}
    
    for (let i = 0; i < a.length; i++) {
        const charA = a[i]
        const charB = b[i]
        
        if (mapA[charA] && mapA[charA] !== charB) {
            return false
        }
        
        if (mapB[charB] && mapB[charB] !== charA) {
            return false
        }
                
        if (!mapA[charA]) {
            mapA[charA] = charB
        }
        
        if (!mapB[charB]) {
            mapB[charB] = charA
        }
    }
    
    return true
}

// Find a Single Number
const csFindTheSingleNumber = nums => {
    const map = new Map()
    
    for (const num of nums) {
        let count = map.get(num)
        
        if (count === undefined)
            count = 0
        
        map.set(num, count + 1)
    }
    
    for (const key of map.keys()) {
        const count = map.get(key)
        if (count === 1) {
            return key
        }
    }
}

// Average of Top Five 
const csAverageOfTopFive = scores => {
    const map = new Map();
    for (const [id, score] of scores) {
        if (map.get(id) === undefined) {
            map.set(id, []) 
        }
        map.get(id).push(score);
    }
    
    for (const key of map.keys()) {
        map.get(key).sort((a, b) => b - a);
    }
    
    for (const key of map.keys()) {
        map.set(key, getAverage(map.get(key)))
    }
    
    return Array.from(map.entries())
}

const getAverage = arr => {
    const k = Math.min(arr.length, 5)
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    return Math.floor(sum / k);
}

// Max Number of Lambdas

const csMaxNumberOfLambdas = text => {
    const map = new Map()
    for (const char of text) {
        map.set(char, 1 + (map.get(char) || 0))
    }
    
    let count = 0
    
    while (true) {
        for (const char of 'lambda') {
            if (map.get(char) >= 1) {
                map.set(char, map.get(char) - 1)
                continue
            }
            return count
        }
        count++
    }
    
    return count
}

// Word Patterns

function csWordPattern(a, b) {
    b = b.split(' ')
    
    if (a.length !== b.length) return false
    
    const mapA = {}
    const mapB = {}
    
    for (let i = 0; i < a.length; i++) {
        const charA = a[i]
        const charB = b[i]
        
        if (mapA[charA] && mapA[charA] !== charB) {
            return false
        }
        
        if (mapB[charB] && mapB[charB] !== charA) {
            return false
        }
                
        if (!mapA[charA]) {
            mapA[charA] = charB
        }
        
        if (!mapB[charB]) {
            mapB[charB] = charA
        }
    }
    
    return true
}

// Group Anagrams
function csGroupAnagrams(strs) {
    const map = {}
    
    for (const str of strs) {
        const charCounts = Array(26).fill(0)
        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
            charCounts[index]++
        }
        
        const key = charCounts.join('-')
        if (!map[key]) map[key] = []
        map[key].push(str)
    }
    
    return Object.values(map).sort((a, b) => b.length - a.length)
}
