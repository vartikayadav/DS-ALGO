/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    slowPtr = head
    fastPtr = head

    if(head==null){
        return null
    }

    if(head.next == null){
        return head
    }
      
    while(fastPtr && (fastPtr.next!==null)){


        slowPtr = slowPtr.next
        fastPtr = (fastPtr.next).next
       
        



    }
    return slowPtr

    
};