const fibonacciSimpleSum2 = n => {
    const fibs = generateFibs(n)
    let start = 0;
    let end = fibs.length - 1;
    while (start < end) {
      const sum = fibs[start] + fibs[end]
      if (sum === n) return true;
      if (sum < n) {
        start++;
      } else {
        end--;
      } 
    } 
    return false;
  }
  
   const generateFibs = limit => {
    const fibs = [0]
  
    let n1 = 0
    let n2 = 1
  
    while (n1 + n2 <= limit) {
      const n3 = n1 + n2
      fibs.push(n3)
      n1 = n2
      n2 = n3
    }
  
    return fibs
   }
  
  console.log(fibonacciSimpleSum2(11))

// Binary Search Algorithm
  const csBinarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2)
      if (target === nums[middle]) return middle
      if (target > nums[middle]) {
        start = middle + 1;
      } 
      if (target < nums[middle]) {
        end = middle -1;
      }
    }
    return -1;
  }
  
  console.log(csBinarySearch([-1, 0, 3, 5, 9, 12], 9))

  const csSearchRotatedSortedArray = (nums, target) => {
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