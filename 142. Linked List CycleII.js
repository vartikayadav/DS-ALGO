/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    slow = head
    fast = head
    flag = false

    while(fast && (fast.next!==null)){
        
        slow = slow.next
        fast = fast.next.next
        
        if(slow === fast){
            flag = true
            break

        }
    }

    

    if(flag === false){
       return null
    }

    slow = head
    while(slow!==fast){

        slow = slow.next
        fast = fast.next

    }

    return slow

    
};