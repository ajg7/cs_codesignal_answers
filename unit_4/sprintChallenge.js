// Uncover Spy
const uncover_spy = (n, trust) => {
    const map = {}
    
    for (const [a, b] of trust) {
        if (!map[a]) map[a] = { 'in': 0, 'out': 0 }
        if (!map[b]) map[b] = { 'in': 0, 'out': 0 }
        
        map[a].out++
        map[b].in++
    }
    
    for (const [person, degrees] of Object.entries(map)) {
        if (degrees.in === n - 1 && degrees.out === 0) {
            return +person
        }
    }
    
    return -1
}

// First Not Repeating Character

const first_not_repeating_character = s => {
    const map = {}
    for (const char of s) {
        if (!map[char]) {
            map[char] = 0
        }
        
        map[char]++
    }
    
    for (const char of s) {
        if (map[char] === 1) {
            return char
        }
    }
    
    return '_'
}

// Condense Linked List
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
const condense_linked_list = node => {
    if (node === null) return null;
    
    const seen = new Set()
    let prev = null
    let curr = node
    while (curr) {
        if (!seen.has(curr.value)) {
            seen.add(curr.value)
            prev = curr
        } else {
            prev.next = curr.next   
        }
        
        curr = curr.next
    }
    
    return node
    
    // let current = node;
    
    // while (current && current.next) {
    //     let runner = current
    //     while (runner && runner.next) {
    //         if (runner.next && runner.next.value === current.value) {
    //             runner.next = runner.next.next
    //         } else {
    //             runner = runner.next
    //         }
    //     }
    //     current = current.next
    // }
    // return node
}

