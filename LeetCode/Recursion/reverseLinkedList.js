/*
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

URL: https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/2378/
*/

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
/*
// Iterative Method
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let next = null;
    
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
};
*/

// Recursive Method
var reverseList = function(head, prev=null){
    if(!head) return null;
    
    let next = reverseList(head.next, head);
    head.next = prev;
    
    return next || head;
}
