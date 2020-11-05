// Inserting a Value into a Linked List
class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

const insertValueIntoSortedLinkedList = (head, value) => {
    let curr = head
    
    while (curr) {
        if (curr.value < value) {
            curr = curr.next
        } else {
            curr.next = ListNode(value, curr.next)
            break
        }
    }
    return head
}

// Merging two Linked Lists

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

const mergeTwoLinkedLists = (l1, l2) => {
    const l3 = new ListNode(null, null)
    let prev = l3
    
    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            prev.next = l1;
            l1 = l1.next;
    } else {
        prev.next = l2;
        l2 = l2.next;
    }
        prev = prev.next
    }
    if (l1 === null) { prev.next = l2; }
    if (l2 === null) { prev.next = l1; }
    return l3.next
}

// Reverse a Linked List in Groups
const reverseNodesInKGroups = (l, k) => {
    let curr = l
    let prev = null
    let next = null
    
    while (k-- && curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    l.next = curr
    return prev
}

const length = l => {
    let count = 0
    
    while (l) {
        l = l.next
        count++
    }
    return count
}

var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head
    
    let count = length(head)
    let currIndex = 0
    
    let dummy = new ListNode(NaN)
    dummy.next = head
    
    let prev = dummy
    let curr = head
    
    while (curr) {
        if (count - currIndex >= k)
            prev.next = reverse(curr, k)
        
        currIndex += k
        prev = curr
        curr = curr.next
    }
    
    return dummy.next
};
