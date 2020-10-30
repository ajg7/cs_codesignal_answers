def csReverseString(chars):
    return [char for char in reversed(chars)]
    
print(csReverseString(["l","a","m","b","d","a"]))

"""
const csCheckPalindrome = input => {
    const inputArr = input.split("");
    const reversedInput = inputArr.reverse();
    return reversedInput.join("") === input
}

console.log(csCheckPalindrome("racecar"));
"""

def removeAdjacent(s):
    # Convert string into a list
    #create result list
    # Loop through the list
    #set up a prev and current
    #if prev == current, then do not append to result list
    #else append
    #return the joined result list
    s_list = list(s)
    result = []
    prev = ""
    for char in s_list:
        if prev != char:
            prev = char
            result.append(char)
        else:
            continue
    return "".join(result)
    
print(removeAdjacent("aaaabbaaaaaa"))