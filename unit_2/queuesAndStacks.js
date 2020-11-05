function queueOnStacks(requests) {
    var left = [];
    var right = [];
  
    function insert(x) {
      left.push(x)
    }
  
    function remove() {
      if (!right.length) {
          while (left.length) {
              right.push(left.pop())
          }
      }
      
      return right.pop()
    }
  
    ans = [];
    for (var i = 0; i < requests.length; i++) {
      var req = requests[i].split(" ");
      if (req[0] === "push") {
        insert(parseInt(req[1]));
      } else {
        ans.push(remove());
      }
    }
    return ans;
  }
  

  function validBracketSequence(sequence) {
    const stack = []
    const map = { ')': '(', ']': '[', '}': '{' }
    
    for (const char of sequence) {
        if (!map[char]) {
            stack.push(char)
        } else {
            const open = map[char]
            if (stack[stack.length - 1] === open) {
                stack.pop()
                continue
            }
            
            return false
        }
    }
    
    return stack.length === 0
}
