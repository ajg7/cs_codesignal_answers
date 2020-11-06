// Reverse a Linked List
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
const reverseLinkedList = l => {
    let curr = l;
    let prev = null;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev
}

// Find Value Sorted Shifted Array 
const findValueSortedShiftedArray = (nums, target) => {
    let startIndex = 0;
    let endIndex = nums.length - 1;
  
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
  
      if (target === nums[middleIndex]) {
        return middleIndex;
      }
      
      if (nums[startIndex] <= nums[middleIndex]) {
        if (target > nums[middleIndex] || target < nums[startIndex]) {
          startIndex = middleIndex + 1
        } else {
          endIndex = middleIndex - 1
        }
      } else {
        if (target < nums[middleIndex] || target > nums[endIndex]) {
          endIndex = middleIndex - 1
        } else {
          startIndex = middleIndex + 1
        }
      }
    }
    return -1;
}

findValueSortedShiftedArray([4, 5, 6, 7, 0, 1, 2], 0)

// Check Blanagrams
const checkBlanagrams = (word1, word2) => {
    const map = Array(26).fill(0)
    
    for (const char of word1) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
      map[index]++
    }
  
    for (const char of word2) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
      map[index]--
    }
  
    let diff = 0
    for (const bucket of map) {
      if (bucket === 0) continue
      diff++
    }
  
    return diff === 2
  }
  
  console.log(checkBlanagrams("tangram", "anagram"))
  console.log(checkBlanagrams("tangram", "pnagram"))
  console.log(checkBlanagrams("abacabaabcabcabc", "abadabaabcabcabc"))
  console.log(checkBlanagrams("aba", "bab"))