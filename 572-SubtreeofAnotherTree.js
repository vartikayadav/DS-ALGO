/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 function isSubtree(root, subRoot) {
     
    function isSametree(r,t){
       
       if(r==null && t==null){
           //base case when whole tree is checked 
           //and verified
           
           return true
       }
       
       if((r!=null && t!=null) && (r.val == t.val)){
           
           return isSametree(r.left,t.left) &&        isSametree(r.right,t.right)
           
       }
       
       return false
       
       
       
   }
   
   
   if(root==null && subRoot==null){
       
       //case when both are empty 
       return true
       
   }
   if(subRoot==null){
       //when subtree to found is null
       return true
   }
   
   if(root==null && subRoot!=null){
       return false
   }
    
     
    
   if(isSametree(root,subRoot)){
       return true
   } 
   
   return isSubtree(root.left,subRoot) ||
       isSubtree(root.right,subRoot)
   
   
 
   
};