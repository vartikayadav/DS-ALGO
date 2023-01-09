/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

    tail = new ListNode(0);
    dummyNode = tail;

    if(list1 === null && list2 === null){
        return null
    }
    if(list1 === null){
        return list2
    }
    if(list2 === null){
        return list1
    }

    while(list1!==null && list2!==null){

      

     if(list1.val<=list2.val){
         dummyNode.next = list1
         list1 = list1.next
     }

     else{
         dummyNode.next = list2
         list2 = list2.next
     }


   

    dummyNode = dummyNode.next

    }

    if(list1===null){
        dummyNode.next = list2
    }
    if(list2===null){
        dummyNode.next = list1
    }


    return tail.next



      
    
};